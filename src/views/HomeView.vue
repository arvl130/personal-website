<script setup>
import enrollmentSystemImgPath from "../assets/imgs/projects/enrollment-system-for-larby-sy-college.webp"
import clinicManagementSystemImgPath from "../assets/imgs/projects/clinic-management-system-for-lfi-dental-clinic.webp"
import informationSystemImgPath from "../assets/imgs/projects/information-system-for-tanay-public-market.webp"
</script>

<template>
  <header>
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl text-gray-700 font-bold">Angelo Geulin</h1>
      <nav class="text-gray-600 flex items-center">
        <a
          href="#"
          class="mx-4 hover:text-gray-900 transition duration-200 hidden sm:block"
        >
          Home
        </a>
        <a
          href="#"
          class="mx-4 hover:text-gray-900 transition duration-200 hidden sm:block"
        >
          Blog
        </a>
        <a
          href="#contact"
          class="mx-4 hover:text-gray-900 transition duration-200 hidden sm:block"
        >
          Contact
        </a>
        <a
          href="https://github.com/arvl130"
          class="mx-4 hover:text-gray-900 transition duration-200"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
        <a
          href="https://gitlab.com/arvl"
          class="hover:text-gray-900 transition duration-200"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 380 380"
          >
            <g id="LOGO">
              <path
                style="fill: rgb(75 85 99 / var(--tw-text-opacity))"
                d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"
              />
            </g>
          </svg>
        </a>
      </nav>
    </div>
  </header>
  <section class="hero-image pt-16 pb-6 px-4 text-center bg-cover bg-center">
    <img
      src="../assets/imgs/profile-picture.webp"
      alt="Profile picture"
      class="max-w-xs w-full mx-auto rounded-full border-4 border-gray-200 mb-4 shadow-lg"
    />
    <div class="bg-gray-100/80 max-w-[22rem] mx-auto rounded-lg px-3 py-4 mb-4">
      <h2 class="text-4xl font-semibold text-gray-800">I'm Angelo Geulin.</h2>
      <p class="text-gray-700">Full Stack Developer and Software Hobbyist</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
      <a
        href="#contact"
        class="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white font-medium transition duration-200"
      >
        Get In Touch
      </a>
      <a
        href="https://github.com/arvl130"
        class="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-600 hover font-medium transition duration-200"
        target="_blank"
      >
        See My Projects
      </a>
    </div>
  </section>
  <section class="bg-gray-800 px-4 py-6">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl text-white font-medium text-center mb-2">
        Tools I'm Familiar With
      </h2>
      <p class="text-xl text-white text-center">
        React, Next.js, Vue, Nuxt.js, Node.js, Express, tRPC, TailwindCSS,
        Firestore, PHP, MySQL, HTML, CSS, JavaScript
      </p>
    </div>
  </section>
  <section class="px-4 py-6 bg-gray-200 rounded-b-3xl">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-gray-800 text-center text-3xl font-medium mb-6">
        Projects I've Built
      </h2>
      <section
        class="bg-white rounded-lg shadow-lg grid sm:grid-cols-2 mb-8 min-h-[18rem]"
      >
        <div
          :style="{
            backgroundImage: `url(${clinicManagementSystemImgPath})`,
          }"
          class="rounded-t-lg sm:rounded-l-lg h-72 sm:h-full bg-cover bg-center"
        />
        <div class="px-4 py-8">
          <h3 class="text-gray-800 font-medium text-xl mb-4">
            Clinic Management System for
            <br />
            <span class="text-teal-500">L.F.I. Dental Clinic</span>
          </h3>
          <p class="text-gray-700">Aids patients and clinic staff in:</p>
          <ul class="list-[square] pl-8 text-gray-700">
            <li>Scheduling and managing appointments</li>
            <li>Collecting and managing patient health records</li>
            <li>Introducing the clinic, its services, and its staff</li>
            <li>Answering commonly asked questions</li>
            <li>Providing a means to contact clinic staff</li>
          </ul>
        </div>
      </section>
      <section
        class="bg-white rounded-lg shadow-lg grid sm:grid-cols-2 mb-8 min-h-[18rem]"
      >
        <div
          :style="{
            backgroundImage: `url(${informationSystemImgPath})`,
          }"
          class="rounded-t-lg sm:hidden h-72 bg-cover bg-center"
        />
        <div class="px-4 py-8">
          <h3 class="text-gray-800 font-medium text-xl mb-4">
            Information System for
            <span class="text-sky-500">Tanay Public Market</span>
          </h3>
          <p class="text-gray-700">Aids public market tenants and staff in:</p>
          <ul class="list-[square] pl-8 text-gray-700">
            <li>Collecting and managing payment records</li>
            <li>Automating the rollout of bills</li>
            <li>Monitoring the status of bills and payments</li>
            <li>Generating payment tickets</li>
            <li>Diseminating notice letters for overdue payments</li>
          </ul>
        </div>
        <div
          :style="{
            backgroundImage: `url(${informationSystemImgPath})`,
          }"
          class="hidden sm:block rounded-r-lg h-full bg-cover bg-center"
        />
      </section>
      <section
        class="bg-white rounded-lg shadow-lg grid sm:grid-cols-2 mb-8 min-h-[18rem]"
      >
        <div
          :style="{
            backgroundImage: `url(${enrollmentSystemImgPath})`,
          }"
          class="rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg h-72 sm:h-full bg-cover bg-center"
        />
        <div class="px-4 py-8">
          <h3 class="text-gray-800 font-medium text-xl mb-4">
            Enrollment System for
            <span class="text-yellow-500">Larby Sy College</span>
          </h3>
          <p class="text-gray-700">
            Aids student applicants and college admission staff in:
          </p>
          <ul class="list-[square] pl-8 text-gray-700">
            <li>Introducing the college and its courses offerred</li>
            <li>Providing instructions for college admission</li>
            <li>Monitoring the admission status of applicants</li>
          </ul>
        </div>
      </section>
      <div class="text-center mb-4">
        <a
          href="https://github.com/arvl130"
          class="hover:bg-gray-800 hover:text-white border border-gray-700 rounded-md px-3 py-2 font-medium text-gray-700 transition duration-200"
          target="_blank"
        >
          See All Projects
        </a>
      </div>
    </div>
  </section>
  <section class="px-4 py-6">
    <h2 class="text-3xl font-medium text-center text-gray-800 mb-4">
      Certificates I've Earned
    </h2>
    <div class="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 mb-4">
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/aws-acf.jpg"
          alt="AWS Academy Cloud Foundations certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            AWS Academy Cloud Foundations
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">AWS Academy</p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/html2.jpg"
          alt="How To Make Lumpia: Framework Makes The Dream Work certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            How To Make Lumpia: Framework Makes The Dream Work
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            Google Developer Students Club FEU - Alabang
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/html1.jpg"
          alt="How To Make Lumpia: The Recipe for Success in Web Development certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            How To Make Lumpia: The Recipe for Success in Web Development
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            Google Developer Students Club FEU - Alabang
            <br />
            Zuitt Coding Bootcamp
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/reconnect-rekindle-day5.jpg"
          alt="re:CONNECT re:KINDLE Day 5 certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            re:CONNECT re:KINDLE Day 5
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            PUP The Programmers' Guild
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/reconnect-rekindle-day4.jpg"
          alt="re:CONNECT re:KINDLE Day 4 certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            re:CONNECT re:KINDLE Day 4
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            PUP The Programmers' Guild
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/reconnect-rekindle-day3.jpg"
          alt="re:CONNECT re:KINDLE Day 3 certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            re:CONNECT re:KINDLE Day 3
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            PUP The Programmers' Guild
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/reconnect-rekindle-day2.jpg"
          alt="re:CONNECT re:KINDLE Day 2 certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            re:CONNECT re:KINDLE Day 2
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            PUP The Programmers' Guild
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
      <div
        class="border-2 hover:border-blue-500 transition duration-150 rounded-lg"
      >
        <img
          src="../assets/imgs/certs/reconnect-rekindle-day1.jpg"
          alt="re:CONNECT re:KINDLE Day 1 certificate"
          class="w-full rounded-t-md"
        />
        <div class="px-4 py-2 font-medium">
          <p class="text-gray-800 text-xl leading-6 mb-3">
            re:CONNECT re:KINDLE Day 1
          </p>
          <p class="text-gray-700 leading-6">Awarded by:</p>
          <p class="text-gray-600 leading-6 font-normal text-sm">
            PUP The Programmers' Guild
          </p>
          <p class="text-gray-700 leading-6">
            Year: <span class="text-gray-600 leading-6 font-normal">2022</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="px-4 pt-6 pb-10 bg-blue-500 rounded-t-3xl">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl text-white font-medium mb-4">Let's Talk</h2>
      <div class="rounded-lg bg-white px-6 py-4 grid sm:grid-cols-2 gap-4">
        <ul class="text-gray-700 text-lg w-full overflow-hidden">
          <li class="mb-6 leading-6">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
              <p class="text-gray-800">Email</p>
            </div>
            <p class="text-gray-600">
              <a href="mailto:angelogeulin123@gmail.com" target="_blank">
                <div class="external-link flex items-center gap-[2px]">
                  angelo geulin 123 AT gmail DOT com
                </div>
              </a>
            </p>
          </li>
          <li class="mb-6 leading-6">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
              <p class="text-gray-800">Twitter</p>
            </div>
            <p class="text-gray-600">
              <a href="https://twitter.com/angelogeulin" target="_blank">
                <div class="external-link flex items-center gap-[2px]">
                  @angelogeulin
                </div>
              </a>
            </p>
          </li>
          <li class="mb-6 leading-6">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-messenger"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
                />
              </svg>
              <p class="text-gray-800">Messenger</p>
            </div>

            <p class="text-gray-600 overflow-hidden text-ellipsis">
              <a href="https://m.me/angelogeulin123" target="_blank">
                <div class="external-link flex items-center gap-[2px]">
                  @angelogeulin123
                </div>
              </a>
            </p>
          </li>
          <li class="leading-6">
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
              <p class="text-gray-800">LinkedIn</p>
            </div>
            <p class="text-gray-600">
              <a
                href="https://www.linkedin.com/in/angelo-geulin-350776138"
                target="_blank"
              >
                <div class="external-link flex items-center gap-[2px]">
                  Angelo Geulin
                </div>
              </a>
            </p>
          </li>
        </ul>
        <div>
          <h3 class="text-gray-800 text-2xl font-medium mb-3">Feedback</h3>
          <label class="block font-medium text-gray-700 mb-2">
            Name <span class="italic font-normal">(optional)</span>
          </label>
          <input
            type="text"
            class="block w-full px-3 py-2 text-gray-700 rounded-md border mb-2 focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label class="block font-medium text-gray-700 mb-2">Email</label>
          <input
            type="text"
            class="block w-full px-3 py-2 text-gray-700 rounded-md border mb-2 focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label class="block font-medium text-gray-700 mb-2">Message</label>
          <textarea
            type="text"
            class="block w-full h-40 px-3 py-2 text-gray-700 bg-white border rounded-md mb-2 focus:outline-none focus:ring focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>
      </div>
    </div>
  </section>
  <footer class="bg-gray-800 px-4 py-6 text-center text-white font-medium">
    Angelo Geulin &copy; 2022
  </footer>
</template>

<style>
.external-link:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24' stroke='rgb(75 85 99)' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' /%3E%3C/svg%3E");
}

.hero-image {
  position: relative;
}

.hero-image:before {
  content: "";
  background-image: url("../assets/imgs/balazscsaba2006-at-unsplash.webp");
  background-color: #d6d3d1;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
