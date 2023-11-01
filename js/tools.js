document.addEventListener('DOMContentLoaded', function() {
 const tabs = document.querySelectorAll('.tab');
 
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const tabId = tab.getAttribute('data-tab');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
        });

const inputField = document.getElementById('essay-topic');
        const charCount = document.getElementById('char-count');
        const maxChars = parseInt(inputField.getAttribute('maxlength'));

          inputField.addEventListener('focus', function () {
                  if (charCount.value.length > maxLength) {
                        charCount.value = charCount.value.substring(0, maxLength);
                      }

                });
      


        const inputFieldInst = document.getElementById('specific-instructions');
                const charCountInst = document.getElementById('instructions');
                const maxCharsInst = parseInt(inputField.getAttribute('max-length'));

                inputFieldInst.addEventListener('focus', function () {
                  if (charCountInst.value.length > maxLength) {
                        charCountInst.value = charCountInst.value.substring(0, maxLength);
                      }

                });
