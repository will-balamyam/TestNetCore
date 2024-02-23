using System;
using Microsoft.EntityFrameworkCore;
using TestDevTienda.Data;
using TestDevTienda.Entities;
using TestDevTienda.Interfaces;

namespace TestDevTienda.Business
{
	public class TiendaService : ITiendaService
	{

        private readonly DaoContext _dbContext;

        public TiendaService(DaoContext dbContext)
		{
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Tienda>> GetAll()
        {
            return await _dbContext.tiendas.ToListAsync();
        }

        public async Task<Tienda> GetById(int id)
        {
            return await _dbContext.tiendas.FindAsync(id);
        }

        public async Task<int> Create(Tienda tienda)
        {
            _dbContext.tiendas.Add(tienda);
            await _dbContext.SaveChangesAsync();
            return (int)tienda.id;
        }

        public async Task<int> Update(int id, Tienda tienda)
        {
            if (id != tienda.id)
            {
                throw new ArgumentException("Id mismatch");
            }

            _dbContext.Entry(tienda).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();

            return id;
        }

        public async Task<int> Delete(int id)
        {
            var entidad = await _dbContext.tiendas.FindAsync(id);
            if (entidad == null)
            {
                throw new ArgumentException("Entity not found");
            }

            _dbContext.tiendas.Remove(entidad);
            await _dbContext.SaveChangesAsync();

            return id;
        }
    }
}

