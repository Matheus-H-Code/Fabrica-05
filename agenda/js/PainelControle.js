var tela  = '';

function parametroURL(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}

function buscarUsuarios(tipoListagem = '', filtros = '', idUsuario = '') {
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : {
            TIPO : 'buscarUsuarios',
            filtros : filtros,
            idUsuario: idUsuario
        },
        success : function(data){

            data = JSON.parse(data);
        
            if(tipoListagem == 'listagemUsuario') {
                $('#selectCoordenador').select2();
                $('#selectCoordenador').select2({
                    dropdownParent: $('#modalCurso')
                });
            } else {
                $("#tableBodyPainelControle").empty();
            }

            $.each(data, function(key, value) {

                if(tipoListagem == 'templateUsuarios') {
                    var corStatus = 'danger', tipoStatus = 'Inativo';
                    if (value.STATUS == 'A') {
                        corStatus = 'success';
                        tipoStatus = 'Ativo';
                    }
                    templateTableBody = tableBodyPainelControleUsuarios;
                    templateTableBody = templateTableBody.replace('#ID#',   value.IDUSUARIO);
                    templateTableBody = templateTableBody.replace('#TELA#',   tela);
                    templateTableBody = templateTableBody.replace('#NOME#',   value.NOME);
                    templateTableBody = templateTableBody.replace('#EMAIL#',  value.EMAIL);
                    templateTableBody = templateTableBody.replace('#TIPOUSUARIO#',  value.TIPOUSUARIO);
                    templateTableBody = templateTableBody.replace('#CORSTATUS#',  corStatus);
                    templateTableBody = templateTableBody.replace('#STATUS#',  tipoStatus);
                    $("#tableBodyPainelControle").append(templateTableBody);
                } else if(tipoListagem == 'listagemUsuario') {
                    $('#selectCoordenador').append(`<option value="${value.IDUSUARIO}"> ${value.NOME}</option>`);
                }


            });
        }
   })
}

function buscarCursos(tipoListagem = '', filtros = '') {
    $("#tableBodyPainelControle").empty();
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : {
            TIPO : 'buscarCursos',
            filtros : filtros
        },
        success : function(data){
            data = JSON.parse(data);
            $.each(data, function(key, value) {
                var corStatus = 'danger', tipoStatus = 'Inativo';
                if (value.STATUS == 'A') {
                    corStatus = 'success';
                    tipoStatus = 'Ativo';
                }

                templateTableBody = tableBodyPainelControleCursos;
                templateTableBody = templateTableBody.replace('#ID#',   value.IDCURSO);
                templateTableBody = templateTableBody.replace('#TELA#',   tela);
                templateTableBody = templateTableBody.replace('#NOME#',   value.NOME);
                templateTableBody = templateTableBody.replace('#DESCRICAO#',  value.DESCRICAO);
                templateTableBody = templateTableBody.replace('#COORDENADOR#',  value.COORDENADOR);
                templateTableBody = templateTableBody.replace('#CORSTATUS#',  corStatus);
                templateTableBody = templateTableBody.replace('#STATUS#',  tipoStatus);
                $("#tableBodyPainelControle").append(templateTableBody);
            });
        }
   })
}

function buscarTurmas(tipoListagem = '', filtros = '') {
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : {
            TIPO : 'buscarTurmas',
            filtros : filtros
        },
        success : function(data){
            data = JSON.parse(data);
            $.each(data, function(key, value) {
                var corStatus = 'danger', tipoStatus = 'Inativo';
                if (value.STATUS == 'A') {
                    corStatus = 'success';
                    tipoStatus = 'Ativo';
                }

                templateTableBody = tableBodyPainelControleTurmas;
                templateTableBody = templateTableBody.replace('#ID#',   value.IDTURMA);
                templateTableBody = templateTableBody.replace('#TELA#',   tela);
                templateTableBody = templateTableBody.replace('#NOME#',   value.NOME);
                templateTableBody = templateTableBody.replace('#CORSTATUS#',  corStatus);
                templateTableBody = templateTableBody.replace('#STATUS#',  tipoStatus);
                $("#tableBodyPainelControle").append(templateTableBody);
            });
        }
   })
}

function buscarDisciplinas(tipoListagem = '', filtros = '') {
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : {
            TIPO : 'buscarDisciplinas',
            filtros : filtros
        },
        success : function(data){
            data = JSON.parse(data);
            $.each(data, function(key, value) {
                var corStatus = 'danger', tipoStatus = 'Inativo';
                if (value.STATUS == 'A') {
                    corStatus = 'success';
                    tipoStatus = 'Ativo';
                }

                templateTableBody = tableBodyPainelControleDisciplinas;
                templateTableBody = templateTableBody.replace('#ID#',   value.IDDISCIPLINA);
                templateTableBody = templateTableBody.replace('#TELA#',   tela);
                templateTableBody = templateTableBody.replace('#NOME#',   value.NOME);
                templateTableBody = templateTableBody.replace('#COORDENADOR#',   value.COORDENADOR);
                templateTableBody = templateTableBody.replace('#PROFESSOR#',   value.PROFESSOR);
                templateTableBody = templateTableBody.replace('#CURSO#',   value.CURSO);
                templateTableBody = templateTableBody.replace('#TURMA#',   value.TURMA);
                templateTableBody = templateTableBody.replace('#CORSTATUS#',  corStatus);
                templateTableBody = templateTableBody.replace('#STATUS#',  tipoStatus);
                $("#tableBodyPainelControle").append(templateTableBody);
            });
        }
   })
}

function montaAbaPainelControle(tipoUSuario) {
    var titulo = '';
    let templateNavPainelControle = navPainelControle;
    templateNavPainelControle = templateNavPainelControle.replace('#TELA#',  tela);
    templateNavPainelControle = templateNavPainelControle.replace('#TELA#',  tela);
    $("#content").prepend(templateNavPainelControle);
    switch (tela) {
        case 'usuario':
            buscarUsuarios('templateUsuarios');
            $( "#navControlePainelBtnCadastro" ).addClass( " d-none" );
            titulo = 'Editar usuário';
            break;
        
        case 'curso':
            buscarCursos();
            titulo = 'Editar curso';
            break;

        case 'turma':
            buscarTurmas();
            titulo = 'Editar turma';
            break;

        case 'disciplina':
            buscarDisciplinas();
            $( "#navControlePainelBtnDetalhes" ).addClass( " d-block" );
            titulo = 'Editar disciplina';
            break;

        default:
            break;
    }

}

function editarApagarUsuario(tipo, idUsuario) {
    var email = $(`#carouselUsuario${idUsuario} #inputEmail`).val();
    var tipoUsuario = $(`#carouselUsuario${idUsuario} #selectUsuario`).val();
    var acao = '';
    if (tipo == 'Editar') {
        acao = 'editarUsuario';
    } else if(tipo == 'Apagar') {
        acao = 'apagarUsuario';
    }
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : {
            TIPO : acao,
            EMAIL : email,
            TIPOUSUARIO : tipoUsuario,
            IDSUSUARIO : idUsuario
        },
        success : function(data){
            data = JSON.parse(data);
            buscarUsuarios('templateUsuarios');
            alert(data);
            // $(`#carouselUsuario1`).remove();
            // $(`#carouselIndicator${usuario.IDUSUARIO}`).remove();
        }
   })
}

function editarApagarCurso(tipo, idCurso = '') {
    var idCoordenador = $(`#bodyCarousel #selectCoordenador`).val();
    var acao = '';
    if (tipo == 'Editar') {
        acao = 'editarCurso';
        var data = { TIPO: acao, IDSUSUARIO: idCoordenador, IDSCURSO: idCurso };
    } else if(tipo == 'Apagar') {
        acao = 'apagarCurso';
        var data = { TIPO: acao, IDSUSUARIO: idCoordenador, IDSCURSO: idCurso };
    } else if(tipo == 'Cadastro'){
        acao = 'CadastrarCursos';
        var nome = $(`#bodyCarousel #inputNome`).val();
        var descricao = $(`#bodyCarousel #descricacaoCurso`).val();
        var data = { TIPO: acao, IDSUSUARIO: idCoordenador, NOME: nome,  DESCRICAO: descricao};
    }
    
    $.ajax({
        url : "../php/funcoes.php",
        type : 'post',
        data : data,
        success : function(data){
            data = JSON.parse(data);
            buscarCursos();
            alert(data);
        }
   })
}

function acaoPainelControle(tipo) {
    var idsSelecionados = [];
    $("body #modalPainelControle").remove();
    $("#bodyCarousel").empty();
    $("#indicatorCarousel").empty();
    $("input:checkbox[name=check"+tela+"]:checked").each(function () {
        idsSelecionados.push($(this).attr("id"));
    });
    
    if(idsSelecionados.length > 0 || tipo == 'Cadastro') {
       var filtro = ""
        switch (tela) {
            case 'usuario':
                if(tipo == 'Editar' || tipo == 'Apagar') {
                    $.ajax({
                        url : "../php/funcoes.php",
                        type : 'post',
                        data : {
                            TIPO : 'buscarUsuariosPorIdeTipoUsuario',
                            IDSUSUARIO: idsSelecionados
                        },
                        success : function(data){
                            data = JSON.parse(data);

                            $.each(data['USUARIOS'], function(key, usuario) {
                                let templateSlideItem = slideItemUsuario;
                                let templateSlideItemIndicators = slideItemIndicators;
                                var slideAtivo = '';
                                if (key == 0) {
                                    slideAtivo = 'active'
                                }
                                
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#IDUSUARIO#',  usuario.IDUSUARIO);
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#NUMERO#',  key);
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#ATIVO#',  slideAtivo);
                                $('#indicatorCarousel').append(templateSlideItemIndicators);

                                templateSlideItem = templateSlideItem.replace('#ATIVO#',  slideAtivo);
                                templateSlideItem = templateSlideItem.replace('#IDFORM#',  usuario.IDUSUARIO);
                                templateSlideItem = templateSlideItem.replace('#IDEDITAR#',  usuario.IDUSUARIO);
                                templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                                templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                                templateSlideItem = templateSlideItem.replace('#NOME#',  usuario.NOME);
                                templateSlideItem = templateSlideItem.replace('#EMAIL#',  usuario.EMAIL);
                                $('#bodyCarousel').append(templateSlideItem);
                                $.each(data['TIPOUSUARIOS'], function(key, tipoUsuario) {
                                    var selectAtivo = '';
                                    if (tipoUsuario.IDTIPOUSUARIO == usuario.IDTIPOUSUARIO) {
                                        selectAtivo = 'selected'
                                    } 
                                    $(`#carouselUsuario${usuario.IDUSUARIO} #selectUsuario`).append(`<option value="${tipoUsuario.IDTIPOUSUARIO}" ${selectAtivo}> ${tipoUsuario.TIPOUSUARIO}</option>`);
                                });
                                if (tipo == 'Apagar') {
                                    $("#inputEmail").attr("disabled", true);
                                    $("#selectUsuario").attr("disabled", true);
                                }
                                
                            });
                        }
                   })
                    if (tipo == 'Apagar') {
                        let templateSlideItem = slideItemCurso;


                        $("#modalUsuarioLabel").text("Apagar Usuário");
                        $(".btn-acao").val("Apagar");
                    } else {
                        $("#modalUsuarioLabel").text("Editar Usuário");
                        $(".btn-acao").val("Editar");
                    }
                    $("#selectUsuario").html("");
                    $('#modalUsuario').modal('show');
                }
    
                $( "#fecharModalUsuario" ).click(function() {
                    $('#modalUsuario').modal('hide');
                });
                break;
            
            case 'curso':
                if(tipo == 'Cadastro') {
                    let templateSlideItem = slideItemCurso;
                    buscarUsuarios('listagemUsuario');

                    templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                    templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                    templateSlideItem = templateSlideItem.replace('#IDEDITAR#',  '');
                    templateSlideItem = templateSlideItem.replace('#NOME#',  '');
                    templateSlideItem = templateSlideItem.replace('#DESCRICAO#',  '');
                    templateSlideItem = templateSlideItem.replace('#ATIVO#',  'active');
                    $('#bodyCarousel').append(templateSlideItem);


                    $('#modalCurso').modal('show');
                    $("#modalCursoLabel").text("Cadastro de cursos");
                    $("#btnCursoModal").text("Cadastrar");
                    
                    
                } else if(tipo == 'Editar' || tipo == 'Apagar') {
                    $.ajax({
                        url : "../php/funcoes.php",
                        type : 'post',
                        data : {
                            TIPO : 'buscarCursosPorIdeUsuario',
                            IDSCURSO: idsSelecionados
                        },
                        success : function(data){
                            data = JSON.parse(data);
                            $.each(data['CURSOS'], function(key, curso) {
                                let templateSlideItem = slideItemCurso;
                                let templateSlideItemIndicators = slideItemIndicators;
                                var slideAtivo = '';
                                if (key == 0) {
                                    slideAtivo = 'active'
                                }
                                
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#ID#',  curso.IDCURSO);
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#NUMERO#',  key);
                                templateSlideItemIndicators = templateSlideItemIndicators.replace('#ATIVO#',  slideAtivo);
                                $('#indicatorCarousel').append(templateSlideItemIndicators);

                                templateSlideItem = templateSlideItem.replace('#ATIVO#',  slideAtivo);
                                templateSlideItem = templateSlideItem.replace('#IDFORM#',  curso.IDCURSO);
                                templateSlideItem = templateSlideItem.replace('#IDEDITAR#',  curso.IDCURSO);
                                templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                                templateSlideItem = templateSlideItem.replace('#TIPO#',  tipo);
                                templateSlideItem = templateSlideItem.replace('#NOME#',  curso.NOME);
                                templateSlideItem = templateSlideItem.replace('#DESCRICAO#',  curso.DESCRICAO);
                                $('#bodyCarousel').append(templateSlideItem);
                                
                                $.each(data['COORDENADORES'], function(key, coordenador) {
                                    var selectAtivo = '';
                                    if (curso.IDCOORDENADOR == coordenador.IDUSUARIO) {
                                        selectAtivo = 'selected'
                                    } 
                                    $(`#carouselCurso${curso.IDCURSO} #selectCoordenador`).append(`<option value="${coordenador.IDUSUARIO}" ${selectAtivo}> ${coordenador.NOME}</option>`);
                                });
                                if (tipo == 'Apagar') {
                                    $("#inputNome").attr("disabled", true);
                                    $("#selectCoordenador").attr("disabled", true);
                                    $("#descricacaoCurso").attr("disabled", true);
                                }
                                
                            });
                        }
                   })
                    if (tipo == 'Apagar') {
                        $("#modalCursoLabel").text("Apagar Curso");
                        $(".btn-acao").val("Apagar");
                    } else {
                        $("#modalCursoLabel").text("Editar Curso");
                        $(".btn-acao").val("Editar");
                    }
                    $("#selectUsuario").html("");
                    $('#modalCurso').modal('show');
                } 
    
                $( "#fecharModalCurso" ).click(function() {
                    $('#modalCurso').modal('hide');
                });
                break;
    
            case 'turma':
                if(tipo == 'Cadastro') {
                    // buscarUsuarios('listagemTurma', 'turma');
                    $("#modalTurmaLabel").text("Cadastro de Turmas");
                    $("#btnTurmaModal").text("Cadastrar");
                    $('#modalTurma').modal('show');
                } else if(tipo == 'Editar') {
                    $("#modalTurmaLabel").text("Editar Turmas");
                    $("#btnTurmaModal").text("Editar");
                    $('#modalTurma').modal('show');
                }
                $( "#fecharModalTurma" ).click(function() {
                    $('#modalTurma').modal('hide');
                });
                break;
    
            case 'disciplina':
    
                break;
    
            default:
                break; 
        }
        

        
    } else {
        alert("Selecione algum registro");
    }

}

$( document ).ready(function() {

    var idTipoUsuario = 0;
    var filtros = '';
    if (idTipoUsuario == 0) {
        tipoUsuario = 'Administrador'
    } else if(idTipoUsuario == 1) {
        tipoUsuario = 'Coodenador'
    } else {
        tipoUsuario = 'Professor'
    }
    tela = parametroURL('page');

    montaAbaPainelControle(tipoUsuario);
    $('.carousel').carousel({
        pause: true,
        interval: false
    });
    
// In your Javascript (external .js resource or <script> tag)


    

});

