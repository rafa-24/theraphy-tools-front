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
              Crear una cuenta
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="register()">
              <!-- Nombre -->
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Nombre</label
                >
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese su nombre"
                  required="true"
                />
              </div>

              <!-- Apellido paterno -->
              <div>
                <label
                  for="paternalSurname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Apellido paterno</label
                >
                <input
                  v-model="paternalSurname"
                  type="text"
                  name="paternalSurname"
                  id="paternalSurname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese apellido paterno"
                  required="true"
                />
              </div>

              <!-- numero telefonico -->
              <div>
                <label
                  for="telephoneNumber"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Numero telefonico</label
                >
                <input
                  v-model="telephoneNumber"
                  type="tel"
                  name="telephoneNumber"
                  id="telephoneNumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+57 300 123 45 56"
                  required="true"
                />
              </div>

              <!-- Seleccionan pais -->
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Seleccione una opcion</label
              >
              <select
                v-model="country"
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un pais</option>
                <option v-for="country in countries" :key="country.patientId" :value="country.patientId">
                  {{ country.countryName }}
                </option>
              </select>

              <!--Email -->
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                />
              </div>

              <!-- Titulo universitario -->
              <div v-if="props.universityDegree">
                <label
                  for="universityDegree"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Titulo universitario</label
                >
                <input
                  v-model="universityDegree"
                  type="text"
                  name="universityDegree"
                  id="universityDegree"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="psicologia"
                  required="true"
                />
              </div>

              <!-- Años de experiencia -->
              <div v-if="props.workExperience">
                <label
                  for="workExperience"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Años de experiencia</label
                >
                <input
                  v-model="workExperience"
                  type="number"
                  name="workExperience"
                  id="workExperience"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="2"
                  required="true"
                />
              </div>

              <!-- Contraseña -->
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>

              <!-- confirmar contraseña -->
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm password</label
                >
                <input
                  v-model="confirmPassword"
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear cuenta
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?
                <NuxtLink to="login">
                  <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Inicia sesion aqui</a>
                </NuxtLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { validatePassword } from "~/helpers/validatePassword";
import { validatePhoneNumber } from "~/helpers/validateTelephoneNumber";
import type { UserPatientPayload, UserTherapistPayload } from "~/store/user/types/User.interface";
import useAuthApi from "~/store/user/user.store";
import { useRouter } from 'vue-router'


const { getListCountries, registerUserPatient, registerUserTherapist } = useAuthApi()
const Swal = useNuxtApp().$swal;
const router = useRouter(); // router vue to redirections

// Props
const props = defineProps<{
  universityDegree: Boolean,
  workExperience: Boolean,
}>();

const name = ref('');
const paternalSurname = ref('');
const telephoneNumber = ref('');
const country = ref<number>(0);
const email = ref('');
const universityDegree = ref('');
const workExperience = ref<number>(0);
const password = ref('');
const confirmPassword = ref('');

// get list countries
const countries = ref([]);

const getCountries = async() => {
  try {
    const response = await getListCountries();
    countries.value = response;
  } catch (error) {
    console.error('error', error);
  }
}

const register = async() => {
  try {
    if (!props.universityDegree && !props.workExperience) {

    // validate form patient
    if (name.value.trim() === '' || paternalSurname.value.trim() === '' || telephoneNumber.value.trim() === '' || country.value === 0 || email.value.trim() === '' || password.value.trim() === '') {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'you must fill in all the fields',
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

    // validate telephoneNumber
    const isValidTelephoneNumber = validatePhoneNumber(country.value, telephoneNumber.value);
    if (!isValidTelephoneNumber) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'the phone number is invalid',
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

    // validate password
    const matchPassword = validatePassword(password.value, confirmPassword.value);
    if (!matchPassword) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'passwords do not match',
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

    // build payload user patient
    const patient: UserPatientPayload = {
      patientName: name.value,
      paternalSurname: paternalSurname.value,
      telephoneNumber: telephoneNumber.value,
      country: country.value,
      email: email.value,
      password: password.value
    }

    const response = await registerUserPatient(patient);

    if(response.status === 201 && response.success === true ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register",
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
        // Redirect to login
        router.push('login');
      }, 2000);
    }
  }

  if (props.universityDegree && props.workExperience) {
      // validate telephoneNumber
  const isValidTelephoneNumber = validatePhoneNumber(country.value, telephoneNumber.value);
    if (!isValidTelephoneNumber) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'the phone number is invalid',
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

    // validate password
    const matchPassword = validatePassword(password.value, confirmPassword.value);
    if (!matchPassword) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'passwords do not match',
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

    if (universityDegree.value.trim() === '') {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'you must fill in the professional title field',
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

    // Validate work experience
    if (workExperience.value <= 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Register",
        text: 'must have at least one year of experience',
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

    // build  user therapist
    const therapist: UserTherapistPayload = {
      name: name.value,
      paternalSurname: paternalSurname.value,
      telephoneNumber: telephoneNumber.value,
      country: country.value,
      email: email.value,
      universityDegree: universityDegree.value,
      workExperience: workExperience.value,
      password: password.value
    }

    const response = await registerUserTherapist(therapist);
    console.log('response therapist', response);

    if (response.success && response.status === 201) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register",
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
        // Redirect to login
        router.push('login');
      }, 2000);
    }
  }


  } catch (error) {
    console.error('Error', error);
  }
}



onMounted(async () => {
  await getCountries();
});

</script>