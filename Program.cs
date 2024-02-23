using Microsoft.EntityFrameworkCore;
using TestDevTienda.Business;
using TestDevTienda.Data;
using TestDevTienda.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<DaoContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddTransient<IArticuloService, ArticuloService>();
builder.Services.AddTransient<ICarritoService, CarritoService>();
builder.Services.AddTransient<IClienteService, ClienteService>();
builder.Services.AddTransient<ITiendaService, TiendaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}


app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

