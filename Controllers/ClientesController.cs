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
    public class ClientesController : Controller
    {

        private readonly IClienteService _clienteService;

        public ClientesController(IClienteService clienteService)
        {
            _clienteService = clienteService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _clienteService.GetAll();
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
                response.data = await _clienteService.GetById(id);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Cliente cliente)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _clienteService.Create(cliente);
            }
            catch (Exception ex)
            {
                response.code = StatusCodes.Status400BadRequest;
                response.message = ex.Message;
            }

            return StatusCode(StatusCodes.Status200OK, response);
        }

        [HttpPut("id")]
        public async Task<IActionResult> Update(int id, Cliente cliente)
        {
            ResponseEndpoint response = new ResponseEndpoint();
            response.code = StatusCodes.Status200OK;
            try
            {
                response.data = await _clienteService.Update(id, cliente);
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
                response.data = await _clienteService.Delete(id);
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

