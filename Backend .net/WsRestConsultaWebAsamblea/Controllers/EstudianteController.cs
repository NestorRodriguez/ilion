﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WsRestConsultaWebAsamblea.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EstudianteController : ApiController
    {

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


    }
}
