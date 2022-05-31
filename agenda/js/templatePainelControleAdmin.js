const tableBodyPainelControleUsuarios = `
<tr>
    <td>
        <div class="text-center">
            <input class="form-check-input" type="checkbox" id="#ID#" name="check#TELA#" value=""/>
        </div>
    </td>
    <td>
        <div class="ms-3">
            <p class="fw-bold mb-1">#NOME#</p>
            <p class="text-muted mb-0">#EMAIL#</p>
        </div>
    </td>
    <td>#TIPOUSUARIO#</td>
    <td>
        <div class="align-items-center">
            <span class="badge badge-#CORSTATUS# rounded-pill">#STATUS#</span>
        </div>
    </td>
</tr>
`;

const tableBodyPainelControleCursos = `
<tr>
    <td>
        <div class="text-center">
            <input class="form-check-input" type="checkbox" id="#ID#" name="check#TELA#" value=""/>
        </div>
    </td>
    <td>#NOME#</td>
    <td>#DESCRICAO#</td>
    <td>#COORDENADOR#</td>
    <td>
        <div class="align-items-center">
            <span class="badge badge-#CORSTATUS# rounded-pill">#STATUS#</span>
        </div>
    </td>
</tr>
`;

const tableBodyPainelControleTurmas = `
<tr>
    <td>
        <div class="text-center">
            <input class="form-check-input" type="checkbox" id="#ID#" name="check#TELA#" value=""/>
        </div>
    </td>
    <td>#NOME#</td>
    <td>
        <div class="align-items-center">
            <span class="badge badge-#CORSTATUS# rounded-pill">#STATUS#</span>
        </div>
    </td>
</tr>
`;

const tableBodyPainelControleDisciplinas = `
<tr>
    <td>
        <div class="text-center">
            <input class="form-check-input" type="checkbox" id="#ID#" name="check#TELA#" value=""/>
        </div>
    </td>
    <td>#NOME#</td>
    <td>#COORDENADOR#</td>
    <td>#PROFESSOR#</td>
    <td>#CURSO#</td>
    <td>#TURMA#</td>
    <td>
        <div class="align-items-center">
            <span class="badge badge-#CORSTATUS# rounded-pill">#STATUS#</span>
        </div>
    </td>
</tr>
`;

const navPainelControle = `
<nav id="navControlePainel" class="navbar navbar-expand-lg navbar-light" style="background-color: #6bb0bf;border-radius: 0px 40px 45px 0px;-moz-border-radius: 0px 40px 45px 0px; -webkit-border-radius: 0px 40px 45px 0px;border: 0px solid #000000; width: auto;position: fixed; z-index: 100">
    <div class="container-fluid">

        <button type="button" id="sidebarCollapse" class="btn"
            style="background-color: #d7e7f1 !important;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>

        </button>
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="border-radius: 0px 40px 45px 0px">
            
            <ul class="nav navbar-nav ml-auto pl-5">
                <li class="nav-item">
                    <a id="navControlePainelBtnCadastro" onclick="acaoPainelControle('Cadastro')" class="nav-link" value="Cadastro" style="color: #d7e7f1 !important; cursor: pointer;">Cadastrar</a>
                </li>
                <li class="nav-item">
                    <a id="navControlePainelBtnEditar" onclick="acaoPainelControle('Editar')" class="nav-link" value="Editar" style="color: #d7e7f1 !important; cursor: pointer;">Editar</a>
                </li>
                <li class="nav-item">
                    <a id="navControlePainelBtnApagar" onclick="acaoPainelControle('Apagar')" class="nav-link" value="Apagar" style="color: #d7e7f1 !important; cursor: pointer;">Apagar</a>
                </li>
                <li class="nav-item">
                    <a id="navControlePainelBtnDetalhes" onclick="acaoPainelControle('Detalhes')" class="nav-link" value="Detalhes" style="color: #d7e7f1 !important; cursor: pointer; display: none">Detalhes</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const slideItemUsuario = `
<div id="carouselUsuario#IDFORM#" class="carousel-item #ATIVO#">
    <form>
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="inputNome">Nome</label>
                <input type="text" class="form-control" id="inputNome" disabled="disabled" value="#NOME#">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="text" class="form-control" id="inputEmail" value="#EMAIL#">
            </div>
            <div class="form-group col-md-6">
                <label style="margin-bottom: 10px">Tipo de Usuário</label>
                <select id="selectUsuario" class="form-control">
                </select>
            </div>
        </div>
        <br>
        <a id="btnUsuarioModal#IDBTN#" onclick="editarApagarUsuario('#TIPO#', #IDEDITAR#)" class="btn btn-primary text-white">#TIPO#</a>
    </form>
</div>
`;

const slideItemCurso = `
<div id="carouselCurso#IDFORM#" class="carousel-item #ATIVO#">
    <form>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="inputNome">Nome</label>
                <input type="text" class="form-control" id="inputNome" value="#NOME#">
            </div>
            <div class="form-group col-md-4">
                <label style="margin-bottom: 10px">Coordenador</label>
                <select id="selectCoordenador" class="form-control" style="width: 100%"></select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="descricacaoCurso">Descrição</label>
                <textarea class="form-control textarea" id="descricacaoCurso">#DESCRICAO#</textarea>
            </div>
        </div>
        <br>
        <a id="btnCursoModal#IDBTN#" onclick="editarApagarCurso('#TIPO#', #IDEDITAR#)" class="btn btn-primary text-white">#TIPO#</a>
    </form>
</div>
`;

const slideItemIndicators = `
<li id="carouselIndicator#ID#" data-target="#carouselExampleIndicators" data-slide-to="#NUMERO#" style="background-color: #F27E93;" class="#ATIVO#"></li>
`;