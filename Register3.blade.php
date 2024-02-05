<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="{{ asset('css/Register3.css') }}">
  <script src="https://kit.fontawesome.com/c07884273f.js" crossorigin="anonymous"></script>
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

      <div class="github-container">
        <label for="github">GitHub/ Gitlabel ID</label>
        <input type="text" name="" id="github" > 
      </div> <p id="error-github" class="error-message"></p>

      <div class="tempat-lahir-container">
        <label for="tempat-lahir">Tempat Lahir</label>
        <input type="text" name="" id="tempat-lahir" >
        <!-- <input type="checkbox" id="showPassword"> Show Password -->
      </div> <p id="erorr-tempat-lahir" class="error-message"></p>
      
      <div class="tanggal-lahir-container">
        <label for="tanggal-lahir">Tanggal Lahir</label>
        <input type="text" id="tanggal-lahir" >
      </div> <p id="error-tanggal-lahir" class="error-message"></p>
    
    </form>

    <div class="upload-btn-container">
      <label for="upload-btn"><i class="fa-solid fa-upload"></i>Upload CV</label>
      <input type="file" id="upload-btn">

      <label for="upload-btn"><i class="fa-solid fa-upload"></i>Upload Flazz Card / ID</label>
      <input type="file" id="upload-btn">
    </div>
    
    
        
    <div class="navigation-btn">
      <div class="next-button">
        <a href="Register"><img src="/Back.png" alt="Back Button"></a>
      </div>
      <div class="back-btn">
        <a href="Register2"><img src="/Next.png" alt="Next Button"></a>
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