using System;
using Microsoft.EntityFrameworkCore;
using TestDevTienda.Entities;

namespace TestDevTienda.Data
{
	public class DaoContext : DbContext
	{
		public DaoContext(DbContextOptions<DaoContext> options) : base(options)
		{
		}

        public DbSet<Cliente> clientes { get; set; }
		public DbSet<Tienda> tiendas { get; set; }
		public DbSet<Articulo> articulos { get; set; }
		public DbSet<Carrito> carritos { get; set; }
		public DbSet<CarritoItem> carrito_items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Articulo>()
				.HasOne(a => a.tienda)
				.WithMany()
				.HasForeignKey(a => a.tiendaId);

			modelBuilder.Entity<CarritoItem>()
				.HasOne(ci => ci.articulo)
				.WithMany(ar => ar.carritoItems)
				.HasForeignKey(ci => ci.articuloId);

			/*modelBuilder.Entity<CarritoItem>()
				.HasOne(ci => ci.carrito)
				.WithMany(ca => ca.carritoItems)
				.HasForeignKey(ci => ci.carritoId);*/
        }
    }
}

