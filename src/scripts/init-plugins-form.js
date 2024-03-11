(() => {
  // date picker
  const inputDatePick = document.getElementById('form-calendar')
  new AirDatepicker(inputDatePick, {
    // selectedDates: [new Date()]
  });

  // mask
  const deliveryForm = document.forms.deliveryForm
  const deliverySelectorName = deliveryForm.elements.name
  const deliverySelectorTel = deliveryForm.elements.tel
  const deliverySelectorDate = deliveryForm.elements.date
  const deliverySelectorAgreement = deliveryForm.elements.agreement

  const offerCallForm = document.forms.offerCallForm
  const callSelectorName = offerCallForm.elements.name
  const callSelectorTel = offerCallForm.elements.tel
  const callSelectorAgreement = offerCallForm.elements.agreement

  const offerEatForm = document.forms.offerEatForm
  const eatSelectorName = offerEatForm.elements.name
  const eatSelectorTel = offerEatForm.elements.tel
  const eatSelectorAgreement = offerEatForm.elements.agreement

  const inputMask = new Inputmask('+7 (999) 999-99-99')
  inputMask.mask(deliverySelectorTel)
  inputMask.mask(callSelectorTel)
  inputMask.mask(eatSelectorTel)


  // validation
  const errorMessageLabelCss = {
    errorLabelStyle: {
      paddingTop: '5px',
      paddingLeft: '7px',
      fontSize: '14px',
      lineHeight: '100%',
      color: '#ff0000',
    }
  }

  const validateDeliveryForm = new window.JustValidate(deliveryForm, { ...errorMessageLabelCss });
  const validateOfferCallForm = new window.JustValidate(offerCallForm, { ...errorMessageLabelCss });
  const validateOfferEatForm = new window.JustValidate(offerEatForm, { ...errorMessageLabelCss });

  const inputNameRules = [
    {
      rule: 'required',
      errorMessage:
        'это поле обязательно для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage:
        'минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage:
        'максимум 20 символов',
    },
  ]
  const inputTelRules = (selectorTel) => [
    {
      rule: 'required',
      errorMessage:
        'это поле обязательно для заполнения',
    },
    {
      validator: function () {
        const numInput = selectorTel.inputmask.unmaskedvalue()
        return numInput.length === 10
      },
      errorMessage:
        'номер не корректный',
    }
  ]
  const inputAgreementRules = [
    {
      rule: 'required',
      errorMessage:
        'это поле обязательно для заполнения',
    },
  ]

  validateDeliveryForm
    .addField(deliverySelectorName, [...inputNameRules])
    .addField(deliverySelectorTel, [...inputTelRules(deliverySelectorTel)])
    .addField(deliverySelectorDate, [
      {
        rule: 'required',
        errorMessage:
          'это поле обязательно для заполнения',
      },
    ])
    .addField(deliverySelectorAgreement, [...inputAgreementRules])

  validateOfferCallForm
    .addField(callSelectorName, [...inputNameRules])
    .addField(callSelectorTel, [...inputTelRules(callSelectorTel)])
    .addField(callSelectorAgreement, [...inputAgreementRules])

  validateOfferEatForm
    .addField(eatSelectorName, [...inputNameRules])
    .addField(eatSelectorTel, [...inputTelRules(eatSelectorTel)])
    .addField(eatSelectorAgreement, [...inputAgreementRules])
})()
