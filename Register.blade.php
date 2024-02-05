<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="{{ asset('css/Register.css') }}">
</head>
<body>
<div class="website-container">
  <div class="logo-container">
    <img id="logo-hackathon" src="/image/Logo Hackathon.png" alt="Hackathon Logo">
  </div>
  
  <div class="register-container">
    <p class="informasi-grup">Informasi Grup</p>
      <div class="progress-bar"><img  src="/image/Progress bar 1.png" alt="Progress bar">
      </div>
    
    <form id="register-form" action="">
      
      <div class="nama-container">
        <label for="nama-group">Nama Group</label>
        <input type="text" name="" id="nama-group" > 
        <p id="error-name" class="error-message"></p>
      </div> 

      <div class="password-container">
        <label for="password">Password</label>
          <input type="password" name="" id="password" >
          <img class="eye" id="eye" src="/image/close eye.png" alt="" onclick="Eye1()">
          <p id="error-password" class="error-message"></p>
      </div> 
      
      <div class="confirm-container">
        <label for="confirm-password">Confirm Password</label>
          <input type="password" name="" id="confirm-password" >
          <img class="eye-confirm-pass" id="eye-confirm-pass" src="/image/close eye.png" alt="" onclick="Eye2()">
          <p id="error-confirm-password" class="error-message"></p>
      </div> 

      <p class="status-text">Status</p>
        <div class="radio-btn-binus">
        <form  action="" >
          <input type="radio" id="Binusian"   name="fav_language" value="HTML" required>
          <label id="Binusian" for="Binusian">Binusian</label><br>
          <input type="radio" id="Non-Binusian" name="fav_language" value="CSS" required>
          <label for="Non-Binusian">Non-Binusian</label>
          <br>
        </div>
        <div class="error-message" id="error-status"></div>
        </form>
        
      <div class="next-button">
        <a id="next-btn" href="Register2"><img src="/image/Next.png" alt="Next Button"></a>
      </div>
        <div class="redirect-login">
          <p>Sudah memiliki akun?</p>
          <a href="">Login disini</a>
        </div>
        
    </form>
  </div>
</div>

  <script src="{{ asset('js/Register.js') }}"></script>
</body>
</html>