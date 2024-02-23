using System;
namespace TestDevTienda.Models
{
	public class ResponseEndpoint
	{
		public ResponseEndpoint()
		{
		}

		public string message { get; set; }
		public dynamic data { get; set; }
		public int code { get; set; }
	}
}

