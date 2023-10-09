<template>
  <div class="min-h-full flex flex-col min-w-full">
    <!-- header -->
    <header class="bg-white border-b-4 border-black">
      <div class="w-full mx-auto max-w-8xl px-4 lg:px-5 xl:px-28">
        <div class="relative flex items-center justify-center py-5 sm:py-4 lg:justify-between">
          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="/">
              <div class="flex items-center">
                <img
                  class="w-auto h-8 sm:h-10 mr-3"
                  src="../images/coat-of-arms-of-malawi-logo.png"
                  alt="Department of the Registrar General"
                />
                <span class="hidden sm:inline-block text-xl font-bold"
                  >Department of the Registrar General</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- body -->
    <div class="flex-grow py-6 mx-auto max-w-8xl px-4 lg:px-5 xl:px-28 w-full">
      <div class="min-h-full w-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
