using System;
using TestDevTienda.Entities;

namespace TestDevTienda.Interfaces
{
	public interface ITiendaService
	{
        Task<IEnumerable<Tienda>> GetAll();
        Task<Tienda> GetById(int id);
        Task<int> Create(Tienda tienda);
        Task<int> Update(int id, Tienda tienda);
        Task<int> Delete(int id);
    }
}

