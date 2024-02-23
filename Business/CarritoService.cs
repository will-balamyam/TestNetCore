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
            return await _dbContext.Carritos.ToListAsync();
        }

        public async Task<Carrito> GetById(int id)
        {
            return await _dbContext.Carritos.FindAsync(id);
        }

        public async Task<int> Create(Carrito carrito)
        {
            _dbContext.Carritos.Add(carrito);
            await _dbContext.SaveChangesAsync();
            return carrito.id;
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
                _dbContext.CarritoItems.Add(entidad);
            }

            await _dbContext.SaveChangesAsync();

            return 1;
        }

        public async Task<int> DeleteItems(int id)
        {
            var entidad = await _dbContext.CarritoItems.FindAsync(id);
            if (entidad == null)
            {
                throw new ArgumentException("Entity not found");
            }

            _dbContext.CarritoItems.Remove(entidad);
            await _dbContext.SaveChangesAsync();

            return 1;
        }
    }
}

