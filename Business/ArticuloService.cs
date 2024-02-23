using System;
using Microsoft.EntityFrameworkCore;
using TestDevTienda.Data;
using TestDevTienda.Entities;
using TestDevTienda.Interfaces;

namespace TestDevTienda.Business
{
	public class ArticuloService : IArticuloService
	{

        private readonly DaoContext _dbContext;

        public ArticuloService(DaoContext dbContext)
		{
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Articulo>> GetAll()
        {
            return await _dbContext.Articulos.ToListAsync();
        }

        public async Task<Articulo> GetById(int id)
        {
            return await _dbContext.Articulos.FindAsync(id);
        }

        public async Task<int> Create(Articulo articulo)
        {
            _dbContext.Articulos.Add(articulo);
            await _dbContext.SaveChangesAsync();
            return articulo.id;
        }

        public async Task<int> Update(int id, Articulo articulo)
        {
            if (id != articulo.id)
            {
                throw new ArgumentException("Id mismatch");
            }

            _dbContext.Entry(articulo).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return articulo.id;
        }

        public async Task<int> Delete(int id)
        {
            var entidad = await _dbContext.Articulos.FindAsync(id);
            if (entidad == null)
            {
                throw new ArgumentException("Entity not found");
            }

            _dbContext.Articulos.Remove(entidad);
            await _dbContext.SaveChangesAsync();
            return id;
        }
    }
}

