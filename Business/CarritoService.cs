using System;
using Microsoft.EntityFrameworkCore;
using TestDevTienda.Data;
using TestDevTienda.Entities;
using TestDevTienda.Interfaces;

namespace TestDevTienda.Business
{
	public class CarritoService : ICarritoService
	{

        private readonly DaoContext _dbContext;

        public CarritoService(DaoContext dbContext)
		{
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Carrito>> GetAll()
        {
            return await _dbContext.carritos.ToListAsync();
        }

        public async Task<Carrito> GetById(int id)
        {
            return await _dbContext.carritos.FirstOrDefaultAsync(item => item.id == id);
        }

        public async Task<int> Create(Carrito carrito)
        {
            _dbContext.carritos.Add(carrito);
            await _dbContext.SaveChangesAsync();
            //Carrito carrito1 = await  _dbContext.carritos.FindAsync((int)carrito.id);
            //carrito1.carritoItems = carrito.carritoItems;
            await _dbContext.SaveChangesAsync();
            return (int)carrito.id;
        }

        public async Task<int> Update(int id, Carrito carrito)
        {
            if (id != carrito.id)
            {
                throw new ArgumentException("Id mismatch");
            }

            _dbContext.Entry(carrito).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();

            return id;
        }

        public async Task<int> CreateItems(IEnumerable<CarritoItem> carritoItems)
        {
            foreach (var entidad in carritoItems)
            {
                _dbContext.carrito_items.Add(entidad);
            }

            await _dbContext.SaveChangesAsync();

            return 1;
        }

        public async Task<int> DeleteItems(int id, int carritoId)
        {
            var entidad = await _dbContext.carrito_items.FindAsync(id);
            if (entidad == null)
            {
                throw new ArgumentException("Entity not found");
            }

            Carrito carrito = await _dbContext.carritos.FindAsync(carritoId);

            if (carrito != null)
            {
                carrito.montoTotal = carrito.montoTotal - entidad.monto;
                _dbContext.Entry(carrito).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
            }

            _dbContext.carrito_items.Remove(entidad);
            await _dbContext.SaveChangesAsync();

            return 1;
        }
    }
}

