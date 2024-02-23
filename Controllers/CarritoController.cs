using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestDevTienda.Business;
using TestDevTienda.Entities;
using TestDevTienda.Interfaces;
using TestDevTienda.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestDevTienda.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarritoController : Controller
    {

        private readonly ICarritoService _carritoService;

        public CarritoController(ICarritoService carritoService)
        {
            _carritoService = carritoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.GetAll();
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int id)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.GetById(id);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Carrito carrito)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.Create(carrito);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Update(int id, Carrito carrito)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.Update(id, carrito);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPost("items")]
        public async Task<IActionResult> CreateItems(IEnumerable<CarritoItem> carritoItems)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.CreateItems(carritoItems);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpDelete("items/(id)")]
        public async Task<IActionResult> DeleteItems(int id)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _carritoService.DeleteItems(id);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }
    }
}

