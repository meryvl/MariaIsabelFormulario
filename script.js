
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  const cvc = document.querySelector('#cvc').value;
  const alert = document.querySelector('.alert');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (forms == forms.length == 0 ) {
          event.preventDefault()
          event.stopPropagation()
          alert.innerHTML = ` <div class="alert alert-danger  fw-bold alert-none-valid" role="alert">
          Some field are missing
        </div>`
        }
        
        
        form.classList.add('was-validated')
      }, false)
    })
})();

