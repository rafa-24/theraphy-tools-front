<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Therapy tools
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              class="space-y-4 md:space-y-6"
              @submit.prevent="userChangePassword()"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Correo electrónico</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="jhondoe@company.com"
                  required
                />
              </div>

              <!--Codigo de verificacion-->
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Introduce el codigo enviado a tu correo electronico.
              </p>

              <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
                <div>
                  <label for="code-1" class="sr-only">First code</label>
                  <input
                    v-model="verificationCodeDigits.firstDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-next="code-2"
                    id="code-1"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-2" class="sr-only">Second code</label>
                  <input
                    v-model="verificationCodeDigits.secondDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-1"
                    data-focus-input-next="code-3"
                    id="code-2"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-3" class="sr-only">Third code</label>
                  <input
                    v-model="verificationCodeDigits.thirdDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-2"
                    data-focus-input-next="code-4"
                    id="code-3"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-4" class="sr-only">Fourth code</label>
                  <input
                    v-model="verificationCodeDigits.fourthDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-3"
                    data-focus-input-next="code-5"
                    id="code-4"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-5" class="sr-only">Fifth code</label>
                  <input
                    v-model="verificationCodeDigits.fifthDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-4"
                    data-focus-input-next="code-6"
                    id="code-5"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-6" class="sr-only">Sixth code</label>
                  <input
                    v-model="verificationCodeDigits.sixthDigit"
                    type="text"
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-prev="code-5"
                    id="code-6"
                    class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
              </div>


              <!-- Nueva contraseña -->
              <div>
                <label
                  for="newPassword"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Tu nueva contraseña</label
                >
                <input
                  v-model="newPassword"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="*********"
                  required
                />
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <template v-if="isLoading">
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  cargando...
                </template>
                <span v-else>Reestablecer contraseña</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useAuthApi from "~/store/auth/auth.store";
import { useRouter } from 'vue-router'
import type { ResetPasswordPayload } from "~/store/auth/types/reset-password.interface";
import { concatenatePropertiesObject } from "~/helpers/concatenatePropertiesObject";

const Swal = useNuxtApp().$swal;
const router = useRouter();

// digitos codigo de verificacion

const verificationCodeDigits = ref({
    firstDigit: '',
    secondDigit: '',
    thirdDigit: '',
    fourthDigit: '',
    fifthDigit: '',
    sixthDigit: '',
});

const email = ref("");
const newPassword = ref("");
const isLoading = ref(false);


const { changePassword } = useAuthApi();

const userChangePassword = async () => {
    try {
        isLoading.value = true;

        const code: string = concatenatePropertiesObject(verificationCodeDigits.value);
        console.log('code', code);

        const payload: ResetPasswordPayload = {
            email: email.value,
            codeVerification: code,
            pass: newPassword.value
        };


        const response = await changePassword(payload);

        if (Object.keys(response).length === 0) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Reset password",
                text: 'invalid credentials can t change password',
                showConfirmButton: false,
                timer: 3000,
                toast: true,
                timerProgressBar: true,
                customClass: {
                popup: "small-alert",
                },
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Reset password",
            text: `${response.message}`,
            showConfirmButton: false,
            timer: 3000,
            toast: true,
            timerProgressBar: true,
            customClass: {
                popup: "small-alert",

            },
        });

        setTimeout(() => {
            router.push('login');
        }, 3000);


    } catch (error) {
        console.error('Error', error);
    } finally {
        isLoading.value = false;
    }
}



</script>