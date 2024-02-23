using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TestDevTienda.Entities
{
	public class Cliente
	{
		public int id { get; set; }
		public string nombres { get; set; }
        public string apellidos { get; set; }
        public string direccion { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        [Column("rol_id")]
        public int rolId { get; set; }
    }
}

