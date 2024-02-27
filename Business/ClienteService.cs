using System;
using Microsoft.EntityFrameworkCore;
using TestDevTienda.Data;
using TestDevTienda.Entities;
using TestDevTienda.Interfaces;

namespace TestDevTienda.Business
{
	public class ClienteService : IClienteService
	{

		private readonly DaoContext _dbContext;

		public ClienteService(DaoContext dbContext)
		{
			_dbContext = dbContext;
		}

        public async Task<Cliente?> Login(string email, string password)
        {
            return await _dbContext.clientes.FirstOrDefaultAsync(item => item.email == email && item.password == password);
        }

		public async Task<IEnumerable<Cliente>> GetAll()
		{
			return await _dbContext.clientes.ToListAsync();
		}

        public async Task<Cliente> GetById(int id)
        {
            return await _dbContext.clientes.FindAsync(id);
        }

        public async Task<int> Create(Cliente cliente)
        {
            _dbContext.clientes.Add(cliente);
            await _dbContext.SaveChangesAsync();
            return cliente.id;
        }

        public async Task<int> Update(int id, Cliente cliente)
        {
            if (id != cliente.id)
            {
                throw new ArgumentException("Id mismatch");
            }

            _dbContext.Entry(cliente).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();

            return 1;
        }

        public async Task<int> Delete(int id)
        {
            var entidad = await _dbContext.clientes.FindAsync(id);
            if (entidad == null)
            {
                throw new ArgumentException("Entity not found");
            }

            _dbContext.clientes.Remove(entidad);
            await _dbContext.SaveChangesAsync();

            return 1;
        }
    }
}

