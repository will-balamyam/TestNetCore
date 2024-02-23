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
    [Route("[controller]")]
    public class TiendasController : Controller
    {

        private readonly ITiendaService _tiendaService;

        public TiendasController(ITiendaService tiendaService)
        {
            _tiendaService = tiendaService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _tiendaService.GetAll();
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
                response.data = await _tiendaService.GetById(id);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Tienda tienda)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _tiendaService.Create(tienda);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message + ex.InnerException.ToString();
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Update(int id, Tienda tienda)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _tiendaService.Update(id, tienda);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _tiendaService.Delete(id);
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

