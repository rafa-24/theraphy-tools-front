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
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Acceda a su cuenta
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="login">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Correo electronico</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="jhondoe@company.com"
                  required="true"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Contraseña</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start"></div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Olvide mi contraseña?</a
                >
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Iniciar sesion
              </button>

              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Aún no tiene una cuenta?
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Regístrese</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { LoginPayload } from "~/store/auth/types/Login.interface";
import useAuthApi from "~/store/auth/auth.store";

const email = ref("");
const password = ref("");
const { signIn } = useAuthApi();
const Swal = useNuxtApp().$swal;

const login = async () => {
  try {
    const payload: LoginPayload = {
      email: email.value,
      password: password.value,
    };

    const response = await signIn(payload);

    if (!response.success) {
      Swal.fire({
        position: "top-end", // Aparece en la esquina superior derecha
        icon: "error", // Tipo de alerta (puede ser success, error, info, etc.)
        title: "Login", // Título de la alerta
        text: `${response.message}`, // Texto de la alerta
        showConfirmButton: false, // No muestra el botón de confirmación
        timer: 3000, // Duración de la alerta en milisegundos (3000ms = 3 segundos)
        toast: true, // Muestra la alerta como un "toast" (desaparece después de un tiempo)
        timerProgressBar: true, // Muestra la barra de progreso
        customClass: {
          popup: "small-alert", // Clase personalizada para ajustar el tamaño
        },
      });
      return;
    }

    Swal.fire({
      position: "top-end", // Aparece en la esquina superior derecha
      icon: "success", // Tipo de alerta (puede ser success, error, info, etc.)
      title: "Login", // Título de la alerta
      text: `${response.message}`, // Texto de la alerta
      showConfirmButton: false, // No muestra el botón de confirmación
      timer: 3000, // Duración de la alerta en milisegundos (3000ms = 3 segundos)
      toast: true, // Muestra la alerta como un "toast" (desaparece después de un tiempo)
      timerProgressBar: true, // Muestra la barra de progreso
      customClass: {
        popup: "small-alert", // Clase personalizada para ajustar el tamaño
      }
    });
    //TODO: redirigir usuario a otra pagina
    //TODO: almacenar token en local storage
  } catch (error) {
    console.error("error", error);
  }
};
</script>
