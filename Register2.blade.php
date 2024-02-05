<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="{{ asset('css/Register2.css') }}">
</head>
<body>
<div class="website-container">
  <div class="logo-container">
    <img id="logo-hackathon" src="/image/Logo Hackathon.png" alt="Hackathon Logo">
  </div>
  
  <div class="register-container">
    <p class="informasi-grup">Informasi Leader</p>
      <div class="progress-bar"><img  src="/Progress bar 2.png" alt="Progress bar">
      </div>
    <form id="register-form" action="">
      <div class="nama-container">
        <label for="nama-lengkap">Nama Lengkap</label>
        <input type="text" name="" id="nama-lengkap" > 
      </div> <p id="error-name" class="error-message"></p>

      <div class="email-container">
        <label for="email">Email</label>
        <input type="email" name="" id="email" >
        <!-- <input type="checkbox" id="showPassword"> Show Password -->
      </div> <p id="erorr-email" class="error-message"></p>
      
      <div class="wa-number-container">
        <label for="wa-number">Whatsapp Number</label>
        <input type="Number" id="wa-number" >
      </div> <p id="error-wa-number" class="error-message"></p>

      <div class="line-id-container">
        <label for="line-id-number">Line ID</label>
        <input type="text" id="line-id-number" >
      </div> <p id="error-line-id" class="error-message"></p>
    
    </form>
        
    <div class="navigation-btn">
      <div class="next-button">
        <a href="Register"><img src="/Back.png" alt="Back Button"></a>
      </div>
      <div class="back-btn">
        <a href="Register3"><img src="/Next.png" alt="Next Button"></a>
      </div>
    </div>
        

        <div class="redirect-login">
          <p>Sudah memiliki akun?</p>
          <a href="">Login disini</a>
        </div>
        
    </form>
  </div>
</div>

  <!-- <script src="Register.js"></script> -->
</body>
</html>