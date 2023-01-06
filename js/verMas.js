//OBTENER EL CONTENEDOR DEL FORMULARIO DE DEPARTAMENTOS
let formularioDepas = document.getElementById('formularioDepas');

//SE OBTIENE EL FORMULARIO DE DEPARTAMENTOS
let formularioDepas_form = document.getElementById('formularioDepas_form');

//FUNCION QUE SE EJECUTA AL PRESIONAR "VER MAS"
function verMas_mmxx_barranco(x){
    //SE OBTIENE EL DEPARTAMENTO POR ID
    let optionDepa = x.id;
    //DATA DEPARTAMENTOS
    let mmxx_barranco = {
        depa53_71: {
            numero : 'S01',
            piso : '01',
            area : '53.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '136,963.10',
            precioSoles: '534,156.08',
            tipo: 'loft',
            plano: 'S01'
        },
        depa56_24: {
            numero : 'S02',
            piso : '01',
            area : '56.24m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '143,414.72',
            precioSoles: '559,317.41',
            tipo: 'flat',
            plano: 'S02'
        },
        depa53_46: {
            numero : 'S03',
            piso : '01',
            area : '53.46m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '136,325.59',
            precioSoles: '531,669.79',
            tipo: 'flat',
            plano: 'S03'
        },
        depa57_17: {
            numero : '102',
            piso : '01',
            area : '57.17m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '145,786.27',
            precioSoles: '568,566.44',
            tipo: 'flat',
            plano: '102'
        },
        depa47_73: {
            numero : '103',
            piso : '01',
            area : '47.73m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '121,713.81',
            precioSoles: '480,142.73',
            tipo: 'flat',
            plano: '503'
        },
        depa63_67: {
            numero : '202 - 302',
            piso : '02 - 03',
            area : '63.67m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '162,361.58',
            precioSoles: ' 633,210.16',
            tipo: 'flat',
            plano: '202'
        },
        depa92_53: {
            numero : '603',
            piso : '06',
            area : '92.53m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '235,955.98',
            precioSoles: ' 920,228.31',
            tipo: 'duplex',
            plano: '603'
        },
        depa91_28: {
            numero : '604',
            piso : '06',
            area : '91.28m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '232,768.42',
            precioSoles: ' 907,796.82',
            tipo: 'duplex',
            plano: '604'
        }
    }

    //MUESTRA EL FORMULARIO
    formularioDepas.classList.toggle('formulario_depas_fade');

    //SE ASIGNA EL ASUNTO PARA EL FORMULARIO
    let formulario_depas_asunto = document.getElementById('formulario_depas_asunto');
    formulario_depas_asunto.value = `Proyecto MMXX Barranco // ${optionDepa}`;

    //SE SELECCIONA EL BOTON DE ENVIAR Y SE ASIGNA EL EVENTO CLICK PARA LA
    //VALIDACION DEL FORMULARIO Y CREACION DEL DETALLE DEL DEPARTAMENTO
    let crearDetalle = document.querySelector('#crearDetalle');
    crearDetalle.addEventListener('click', function(){
        //SE OBTIENE LOS INPUTS DEL FORMULARIO
        let nombre = document.getElementById('nombre').value;
        let celular = document.getElementById('celular').value;
        let emailFormDepa = document.getElementById('emailFormDepa').value;
        let mensaje = document.getElementById('mensaje').value;
        let terminos = document.getElementById('terminos').checked;
        
        //VALIDACION DEL FORMULARIO AL HACER CLICK EN ENVIAR
        if(nombre.length == 0 || celular.length == 0 || emailFormDepa.length == 0 || mensaje.length == 0 || terminos == false){
            alert('Para poder continuar debe de completar todos los campos del formulario.');
            return;
        } else{
            //SE OCULTA EL FORMULARIO
            formularioDepas.classList.toggle('formulario_depas_fade');
            //SE CREA EL DETALLE DEL DEPARTAMENTO
            let detalleDepa = document.getElementById('detalleDepa');
            detalleDepa.innerHTML = `<div class="container mx-auto">
                                        <div class="detalle_departamento_logo mb-10">
                                            <img src="../../styles/graphics/logo_libre_negro.png" alt="">
                                            <div class="detalle_departamento_logo_x">
                                                <button onclick="enviarFormulario()">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex flex-col lg:flex-row detalle_departamento_box">
                                            <div class="detalle_departamento_presentacion w-full text-center lg:text-left">
                                                <h1>Te presentamos al depa:</h1>
                                                <p class="tipo mega">${mmxx_barranco[optionDepa].tipo}</p>
                                                <div class="descripcion mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>descripción</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Número</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].numero}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Piso</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].piso}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Área</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].area}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="descripcion mt-5 mb-10 lg:mb-0 mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>incluye</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Sala</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].sala}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Comedor</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].comedor}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Kitchenette</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].kitchenette}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Dormitorio</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].dormitorio}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Baño</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].bano}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Terraza</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${mmxx_barranco[optionDepa].terraza}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="detalle_departamento_slide w-full">
                                                <div class="detalle_departamento_slide_pdf">
                                                    <a href="../../styles/proyectos/mmxx_barranco/planos/${mmxx_barranco[optionDepa].plano}.pdf" download="${mmxx_barranco[optionDepa].plano}.pdf">Descargar plano</a>
                                                </div>
                                                <div class="detalle_departamento_slide_img">
                                                    <img class="w-full" src="../../styles/proyectos/mmxx_barranco/planos/${mmxx_barranco[optionDepa].plano}.jpg" style="width:auto; height:400px; margin:auto;">
                                                </div>
                                                <div class="detalle_departamento_slide_price flex flex-row justify-around mt-1 gap-x-1">
                                                    <div class="text-center">
                                                        <h1>dolares</h1>
                                                        <h3>$ ${mmxx_barranco[optionDepa].precioDolares}</h3>
                                                    </div>
                                                    <div class="text-center">
                                                        <h1>soles</h1>
                                                        <h3>s/. ${mmxx_barranco[optionDepa].precioSoles}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

            detalleDepa.classList.toggle('detalle_departamento_fade');
            return;
        }
    })
}

//FUNCION QUE SE EJECUTA AL PRESIONAR "VER MAS"
function verMas_28_julio(x){
    //SE OBTIENE EL DEPARTAMENTO POR ID
    let optionDepa = x.id;
    
    //DATA DEPARTAMENTOS
    let veinti_ocho_julio = {
        depa87_76: {
            numero : '902',
            piso : '09',
            area : '87.76m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '211,501.60',
            precioSoles: ' 824,856.24',
            tipo: 'flat',
            plano: 'X02_PISO_7-11'
        },
        depa88_61: {
            numero : '302 - 402 - 602',
            piso : '03 - 04 - 06',
            area : '81.61m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '213,550.10',
            precioSoles: ' 832,845.39',
            tipo: 'flat',
            plano: 'X02_PISO_3-6'
        },
        depa116_69: {
            numero : '701 - 801 - 901 - 1001 - 1201 - 1301',
            piso : '07 - 08 - 09 - 10 - 12 - 13',
            area : '116.69m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '281,222.90',
            precioSoles: ' 1,096,769.31',
            tipo: 'flat',
            plano: 'X01_PISO_7-13'
        },
        depa117_9: {
            numero : '201 - 301 - 501 - 601',
            piso : '02 - 03 - 05 - 06',
            area : '117.9m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '284,139.00',
            precioSoles: ' 1,108,142.10',
            tipo: 'flat',
            plano: 'X01_PISO_2-6'
        },
        depa127_71: {
            numero : '101',
            piso : '01',
            area : '127.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '02',
            bano : '01',
            terraza : '01',
            precioDolares: '307,781.10',
            precioSoles: ' 1,200,346.29',
            tipo: 'duplex',
            plano: 'DUPLEX_101'
        },
        depa108_71: {
            numero : '102902',
            piso : '01',
            area : '108.71m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '01',
            bano : '01',
            terraza : '01',
            precioDolares: '261,991.10',
            precioSoles: ' 1,021,765.29',
            tipo: 'duplex',
            plano: 'DUPLEX_102'
        },
        depa178_91: {
            numero : '1202',
            piso : '12',
            area : '178.91m2',
            sala : '01',
            comedor : '01',
            kitchenette : '01',
            dormitorio : '03',
            bano : '01',
            terraza : '01',
            precioDolares: '398,074.75',
            precioSoles: ' 1,552,491.53',
            tipo: 'duplex',
            plano: 'DUPLEX_1202'
        },
    }

    //MUESTRA EL FORMULARIO
    formularioDepas.classList.toggle('formulario_depas_fade');

    //SE ASIGNA EL ASUNTO PARA EL FORMULARIO
    let formulario_depas_asunto = document.getElementById('formulario_depas_asunto');
    formulario_depas_asunto.value = `Proyecto 28 Julio // ${optionDepa}`;

    //SE SELECCIONA EL BOTON DE ENVIAR Y SE ASIGNA EL EVENTO CLICK PARA LA
    //VALIDACION DEL FORMULARIO Y CREACION DEL DETALLE DEL DEPARTAMENTO
    let crearDetalle = document.querySelector('#crearDetalle');
    crearDetalle.addEventListener('click', function(){
        //SE OBTIENE LOS INPUTS DEL FORMULARIO
        let nombre = document.getElementById('nombre').value;
        let celular = document.getElementById('celular').value;
        let emailFormDepa = document.getElementById('emailFormDepa').value;
        let mensaje = document.getElementById('mensaje').value;
        let terminos = document.getElementById('terminos').checked;
        
        //VALIDACION DEL FORMULARIO AL HACER CLICK EN ENVIAR
        if(nombre.length == 0 || celular.length == 0 || emailFormDepa.length == 0 || mensaje.length == 0 || terminos == false){
            alert('Para poder continuar debe de completar todos los campos del formulario.');
            return;
        } else{
            //SE OCULTA EL FORMULARIO
            formularioDepas.classList.toggle('formulario_depas_fade');
            //SE CREA EL DETALLE DEL DEPARTAMENTO
            let detalleDepa = document.getElementById('detalleDepa');
            detalleDepa.innerHTML = `<div class="container mx-auto">
                                        <div class="detalle_departamento_logo mb-10">
                                            <img src="../../styles/graphics/logo_libre_negro.png" alt="">
                                            <div class="detalle_departamento_logo_x">
                                                <button onclick="enviarFormulario()">
                                                    <i class="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="flex flex-col lg:flex-row detalle_departamento_box">
                                            <div class="detalle_departamento_presentacion w-full text-center lg:text-left">
                                                <h1>Te presentamos al depa:</h1>
                                                <p class="tipo mega">${veinti_ocho_julio[optionDepa].tipo}</p>
                                                <div class="descripcion mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>descripción</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Número</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].numero}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Piso</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].piso}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Área</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].area}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="descripcion mt-5 mb-10 lg:mb-0 mx-auto lg:mx-0">
                                                    <div class="descripcion_titulo">
                                                        <p>incluye</p>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Sala</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].sala}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Comedor</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].comedor}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Kitchenette</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].kitchenette}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Dormitorio</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].dormitorio}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Baño</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].bano}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-row gap-1 mt-1">
                                                        <div class="descripcion_encabezado w-full">
                                                            <h5>Terraza</h5>
                                                        </div>
                                                        <div class="descripcion_data w-full">
                                                            <span>${veinti_ocho_julio[optionDepa].terraza}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="detalle_departamento_slide w-full">
                                                <div class="detalle_departamento_slide_pdf">
                                                    <a href="../../styles/proyectos/28_julio/planos/${veinti_ocho_julio[optionDepa].plano}.pdf" download="${veinti_ocho_julio[optionDepa].plano}.pdf">Descargar plano</a>
                                                </div>
                                                <div class="detalle_departamento_slide_img">
                                                    <img class="w-full" src="../../styles/proyectos/28_julio/planos/${veinti_ocho_julio[optionDepa].plano}.jpg" style="width:auto; height:400px; margin:auto;">
                                                </div>
                                                <div class="detalle_departamento_slide_price flex flex-row justify-around mt-1 gap-x-1">
                                                    <div class="text-center">
                                                        <h1>dolares</h1>
                                                        <h3>$ ${veinti_ocho_julio[optionDepa].precioDolares}</h3>
                                                    </div>
                                                    <div class="text-center">
                                                        <h1>soles</h1>
                                                        <h3>s/. ${veinti_ocho_julio[optionDepa].precioSoles}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

            detalleDepa.classList.toggle('detalle_departamento_fade');
            return;
        }
    })
}

//FUNCION PARA CERRAR FORMULARIO DE DEPAS
function closeFormularioDepas(){
    formularioDepas.classList.toggle('formulario_depas_fade');
}

//FUNCION PARA ENVIAR EL FORMULARIO DEL DEPARTAMENTO
function enviarFormulario(){
    formularioDepas_form.submit();
}