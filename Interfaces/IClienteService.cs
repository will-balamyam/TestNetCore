using System;
using TestDevTienda.Entities;

namespace TestDevTienda.Interfaces
{
	public interface IClienteService
	{
        Task<IEnumerable<Cliente>> GetAll();
        Task<Cliente> GetById(int id);
        Task<int> Create(Cliente cliente);
        Task<int> Update(int id, Cliente cliente);
        Task<int> Delete(int id);
    }
}

