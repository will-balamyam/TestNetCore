using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Formats.Asn1;
using System.Threading;

namespace TestDevTienda.Entities
{
    public class CarritoItem
	{
        public int id { get; set; }
        [Column("carrito_id")]
        public int carritoId { get; set; }
        public Carrito carrito { get; set; }
        [Column("articulo_id")]
        public int articuloId { get; set; }
        public Articulo articulo { get; set; }
        public decimal monto { get; set; }
        public int cantidad { get; set; }
    }
}

