
function openPopup() {
  document.getElementById("overlay").classList.add("show");
}

function closePopup() {
  document.getElementById("overlay").classList.remove("show");
}

//Validar other amount/ amount to give

function mostrarMensagem(mensagem) {
  var customAlert = document.getElementById('custom_alert');
  customAlert.textContent = mensagem;
  customAlert.style.display = 'block';
  setTimeout(function () {
    customAlert.style.display = 'none';
  }, 3000); 
}
function mostrarMensagem2(mensagem) {
  var customAlert = document.getElementById('custom_alert2');
  customAlert.textContent = mensagem;
  customAlert.style.display = 'block';
  setTimeout(function () {
    customAlert.style.display = 'none';
  }, 3000); 
}

function validarValor() {
  var valor = document.getElementById('single_amount').value;
  var errorMessage = document.getElementById('error_message');

  if (!/^[1-9]\d*$/.test(valor)) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please ensure that you only enter numbers, and not just zero in the "Other Amount" field.';
  } else {
    errorMessage.style.display = 'none';
    mostrarMensagem('Valid amount: ' + valor + '€');
    document.getElementById('Email').focus();
  }
}

function validarRegular() {
  var valorRegular = document.getElementById('regular_amount').value;
  var regularErrorMessage = document.getElementById('regular_error_message');

  if (!/^[1-9]\d*$/.test(valorRegular)) {
    regularErrorMessage.style.display = 'block';
    regularErrorMessage.textContent = 'Please ensure that you only enter numbers, and not just zero in the "Amount to give (Monthly)" field';
  } else {
    regularErrorMessage.style.display = 'none';
    mostrarMensagem2('Valid monthly amount: ' + valorRegular + '€');
    document.getElementById('Email').focus();
  }
}

//fim validar other amount/ amount to give


//funcionalidades dos botoes give once e monthly

function toggleButtonClick(button) {
  var donationTypeButtons = document.querySelectorAll('.Donation_type button');
  var regularSection = document.getElementById('regular');
  var nextButtonRegular = document.getElementById('nextButton_regular');
  var paymentButtons = document.getElementById('singe_donation_payment');
  var monthlyPaymentSection = document.getElementById('monthly_donation_payment');
  var donorAddress = document.getElementById('donor_adress');

  donationTypeButtons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove('clicked');
    }
  });

  button.classList.toggle('clicked');

  var singleAmountField = document.getElementById('single_amount');
  var onceSection = document.getElementById('once');

  if (button.id === 'give_once') {
    singleAmountField.style.display = 'block';
    onceSection.style.display = 'block';
    regularSection.style.display = 'none';
    paymentButtons.style.display = 'block';
    monthlyPaymentSection.style.display = 'none';
    donorAddress.style.display = 'none';
  } else if (button.id === 'monthly') {
    singleAmountField.style.display = 'none';
    onceSection.style.display = 'none'; 
    regularSection.style.display = 'block';
    paymentButtons.style.display = 'none';
    monthlyPaymentSection.style.display = 'block';
    donorAddress.style.display = donorAddress.style.display === 'none' ? 'block' : 'none';
  }
}

window.onload = function () {
  var giveOnceButton = document.getElementById('give_once');
  giveOnceButton.classList.add('clicked');
  simulateClick(giveOnceButton);
};

function simulateClick(element) {
  var event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
}

function setOtherAmount(button) {
  const valor = button.value;
  document.getElementById('single_amount').value = valor;
}

function setOtherAmount2(button) {
  const valor = button.value;
  document.getElementById('regular_amount').value = valor;
}

//fim das funcionalidades dos botoes give once e monthly

// Função para fechar o popup e redefinir ao estado inicial

function fecharPopup() {
  var regularSection = document.getElementById('regular');
  var singleAmountField = document.getElementById('single_amount');
  var onceSection = document.getElementById('once');

  singleAmountField.style.display = 'block';
  onceSection.style.display = 'block';
  regularSection.style.display = 'block';

  document.getElementById('give_once').classList.remove('clicked');
  document.getElementById('monthly').classList.remove('clicked');
}
// Fim Função para fechar o popup e redefinir ao estado inicial


// Adicionar ou remover a classe 'clicked' ao botão clicado na div once

function toggleButtonClick_once(button) {
  var onceButtons = document.querySelectorAll('.once button');

  onceButtons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove('clicked');
    }
  });

  button.classList.toggle('clicked');
}
// Fim Adicionar ou remover a classe 'clicked' ao botão clicado na div once

// Adicionar ou remover a classe 'clicked' ao botão clicado na div once

function toggleButtonClick_single(button) {
  var singleButtons = document.querySelectorAll('.singe_donation_payment button');

  // Remover a classe 'clicked' de todos os botões da classe 'once'

  singleButtons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove('clicked');
    }
  });

  // Adicionar ou remover a classe 'clicked' ao botão clicado
  button.classList.toggle('clicked');
}
// Fim Adicionar ou remover a classe 'clicked' ao botão clicado na div once

// Adicionar ou remover a classe 'clicked' ao botão clicado na div once
function toggleButtonClick_regular(button) {
  var regularButtons = document.querySelectorAll('.monthly_donation_payment button');

  // Remover a classe 'clicked' de todos os botões da classe 'once'
  regularButtons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove('clicked');
    }
  });

  // Adicionar ou remover a classe 'clicked' ao botão clicado
  button.classList.toggle('clicked');
}
// Fim Adicionar ou remover a classe 'clicked' ao botão clicado na div once

// Adicionar ou remover a classe 'clicked' aos botoes do individual e do company
function toggleButtonClick_donor(button) {
  var typeOfDonorButtons = document.querySelectorAll('.Type_of_Donor button');
  var donorInformation = document.getElementById('donor_information');
  typeOfDonorButtons.forEach(function (btn) {
    if (btn !== button) {
      btn.classList.remove('clicked');
    }
  });


  //individual/company

  button.classList.toggle('clicked');
  var isVisible = window.getComputedStyle(donorInformation).display !== 'none';
  if (isVisible) {
    var lastNameField = document.getElementById('family_name');
    lastNameField.style.display = button.id === 'company' ? 'none' : 'block';
  }
}

// Fim Adicionar ou remover a classe 'clicked' aos botoes do individual e do company

//botao debito direto 
function toggleDirectDebit() {
  var ibanInput = document.getElementById('IBAN');
  ibanInput.style.display = 'block';
}

function toggleCreditCard() {
  var ibanInput = document.getElementById('IBAN'); 

  ibanInput.style.display = 'none';
}

function function_combination_direct(button) {
  toggleButtonClick_regular(button);
  toggleDirectDebit()
}

function function_combination_credit(button) {
  toggleButtonClick_regular(button);
  toggleCreditCard()
}


function calcularMensagens() {
  var valor = parseFloat(document.getElementById('single_amount').value);
  const refeicoesMsg = document.getElementById('refeicoesMsg');
  const pessoasMsg = document.getElementById('pessoasMsg');

  // Cálculo de refeições
  const refeicoes = Math.floor(valor / 1.5);
  const pessoas = Math.floor(refeicoes / 2);

  if (valor > 40) {
    refeicoesMsg.textContent = `O seu donativo permitirá alimentar diariamente ${pessoas} pessoas`;
  } else {
    refeicoesMsg.textContent = `O seu donativo permitirá fornecer aproximadamente ${refeicoes} refeições`;
  }
}

// Chamada da função ao clicar no botão Finish
document.getElementById('Finish').addEventListener('click', function () {
  calcularMensagens();
});

// Função para definir o valor na secção "Other Amount"
function setOtherAmount(button) {
  const valor = button.value;
  document.getElementById('single_amount').value = valor;
}


function calcularMensagens() {
  var valor = parseFloat(document.getElementById('single_amount').value);
  const refeicoesMsg = document.getElementById('refeicoesMsg');
  const pessoasMsg = document.getElementById('pessoasMsg');

  // Cálculo de refeições
  const refeicoes = Math.floor(valor / 1.5);
  const pessoas = Math.floor(refeicoes / 2);

  // Verificar o tipo de doação
  var tipoDoacao;
  var doacaoSelecionada = document.querySelector('.Donation_type button.clicked');
  if (doacaoSelecionada) {
    tipoDoacao = doacaoSelecionada.id;
  }

  if (tipoDoacao === 'give_once') {
    if (valor > 40) {
      refeicoesMsg.textContent = `O seu donativo permitirá alimentar diariamente ${pessoas} pessoas`;
    } else {
      refeicoesMsg.textContent = `O seu donativo permitirá fornecer aproximadamente ${refeicoes} refeições`;
    }
  } else if (tipoDoacao === 'monthly') {
    var valorRegular = parseFloat(document.getElementById('regular_amount').value);

    if (valorRegular > 90) {
      refeicoesMsg.textContent = `O seu donativo permitirá alimentar ${pessoas} pessoas durante este mês`;
    } else {
      const diasCobertos = Math.floor((valorRegular * 2) / 1.5);
      refeicoesMsg.textContent = `O seu donativo permitirá alimentar uma pessoa durante ${diasCobertos} dias`;
    }
  }
}

document.getElementById('Finish').addEventListener('click', function () {
  calcularMensagens();
});




