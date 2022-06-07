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

        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="border-radius: 0px 40px 45px 0px">
            
            <ul class="nav navbar-nav ml-auto">
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
                    <a id="navControlePainelBtnSelecaoCalendario" onclick="acaoPainelControle('SelecaoCalendario')" class="nav-link" value="SelecaoCalendario" style="color: #d7e7f1 !important; cursor: pointer; display: none">Selecionar Disciplina</a>
                </li>
                <li class="nav-item">
                <a id="navControlePainelBtnSalvarAulas" class="nav-link" value="SalvarAulas" style="color: #d7e7f1 !important; cursor: pointer; display: none">Salvar aulas</a>
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

const eventTurmaCalendario = `
<div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' id='#ID#'>#NOME#</div>
</div>
`;