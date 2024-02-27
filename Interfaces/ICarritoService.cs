using System;
using TestDevTienda.Entities;

namespace TestDevTienda.Interfaces
{
	public interface ICarritoService
	{
        Task<IEnumerable<Carrito>> GetAll();
        Task<Carrito> GetById(int id);
        Task<int> Create(Carrito carrito);
        Task<int> Update(int id, Carrito carrito);
        Task<int> CreateItems(IEnumerable<CarritoItem> carritoItems);
        Task<int> DeleteItems(int id, int carritoId);
    }
}

