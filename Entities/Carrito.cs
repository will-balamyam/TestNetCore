using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Formats.Asn1;

namespace TestDevTienda.Entities
{
    public class Carrito
	{
        public int? id { get; set; }
        [Column("cliente_id")]
        public int clienteId { get; set; }
        public Cliente? cliente { get; set; }
        [Column("monto_total")]
        public decimal montoTotal { get; set; }
        [Column("fecha_compra")]
        public DateTime? fechaCompra { get; set; }
        public ICollection<CarritoItem>? carritoItems { get; set; }
    }
}

