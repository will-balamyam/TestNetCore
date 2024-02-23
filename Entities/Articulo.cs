using System;
using static System.Net.Mime.MediaTypeNames;
using System.Formats.Asn1;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestDevTienda.Entities
{
    public class Articulo
	{
        public int id { get; set; }
		public string codigo { get; set; }
        public string descripcion { get; set; }
        public decimal precio { get; set; }
        public string imagen { get; set; }
        public int stock { get; set; }
        [Column("tienda_id")]
        public int tiendaId { get; set; }
        public Tienda tienda { get; set; }
        public ICollection<CarritoItem> carritoItems { get; set; }
    }
}

