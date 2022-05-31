<html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' c='IE=edge'>
        <title>Acesso</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>

        <link href="css/style.css" rel="stylesheet">
        <link href="css/login_register_forms.css" rel="stylesheet">
        <!-- Font Awesome CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    </head>

    <body >

        <div id="bg">
            <img class="bg" src="images/bg-cad.jpg" alt="">
        </div>

        <section class="forms-section">
            <!-- <h1 class="section-title">Animated Forms</h1> -->
            <div class="forms">
              <div class="form-wrapper is-active">
                <button type="button" class="switcher switcher-login">
                  Login
                    <span class="underline"></span>
                </button>
                <form method="POST" class="form form-login" action="login.php">
                  <fieldset>
                    <div class="input-block">
                      <label for="login-email">E-mail</label>
                      <input name="email" id="login-email" type="email" required>
                    </div>
                    <div class="input-block">
                      <label for="login-password">Senha</label>
                      <input name="senha" id="login-password" type="password" required>
                    </div>
                  </fieldset>
                  <button type="submit" class="btn-login" style="cursor: pointer;">Login</button>
                </form>
              </div>
              <div class="form-wrapper">
                <button type="button" class="switcher switcher-signup">
                    Cadastrar
                    <span class="underline"></span>
                </button>
                <form method="POST" class="form form-signup" action="cadUsuario.php">
                  <fieldset>
                    <div class="input-block">
                        <label for="signup-nome">Nome</label>
                        <input name="nome" id="nome" type="nome" required>
                      </div>
                    <div class="input-block">
                      <label for="signup-email">E-mail</label>
                      <input name="email" id="email" type="email" required>
                    </div>
                    <div class="input-block">
                      <label for="signup-senha">Senha</label>
                      <input name="senha" id="senha" type="password" required>
                    </div>
                  </fieldset>
                  <button type="submit" class="btn-signup" style="cursor: pointer;">Cadastrar</button>
                </form>
              </div>
            </div>
        </section>

    </body>

    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
        integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
        crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
        integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
        crossorigin="anonymous"></script>

    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></script>

    <script src="js/basicos.js"></script>
    <script src="js/templatesBasicos.js"></script>

</html>