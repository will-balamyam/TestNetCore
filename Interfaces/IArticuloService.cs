using System;
using TestDevTienda.Entities;

namespace TestDevTienda.Interfaces
{
	public interface IArticuloService
	{
        Task<IEnumerable<Articulo>> GetAll();
        Task<Articulo> GetById(int id);
        Task<int> Create(Articulo articulo);
        Task<int> Update(int id, Articulo articulo);
        Task<int> Delete(int id);
    }
}

