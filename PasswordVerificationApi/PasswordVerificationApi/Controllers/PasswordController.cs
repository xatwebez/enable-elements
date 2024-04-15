using Microsoft.AspNetCore.Mvc;

namespace PasswordVerificationApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PasswordController : ControllerBase
    {
        private const string CorrectPassword = "Z4@9x#Y2"; // 替换为你的密码

        [HttpPost]
        public IActionResult Verify([FromBody] PasswordModel model)
        {
            if (model.Password == CorrectPassword)
            {
                return Ok(new { Success = true });
            }
            else
            {
                return Ok(new { Success = false });
            }
        }
    }

    public class PasswordModel
    {
        public string Password { get; set; }
    }
}
