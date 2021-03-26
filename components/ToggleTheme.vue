<template>
  <div class="pl-8">
    <button
      class="border bg-transparent dark:border-gray-500 border-gray-900 rounded-full focus:outline-none fill-current w-12 h-6 flex items-center"
      @click="toggle"
    >
      <div
        :class="
          $colorMode.value === 'light' ? 'translate-x-full' : 'translate-x-0'
        "
        class="transform transition-all duration-500"
      >
        <div
          v-if="$colorMode.value !== 'light'"
          class="dark:text-black dark:bg-white rounded-full w-6 h-6 text-center items-center flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 inline mx-auto"
            viewBox="0 0 65 65"
          >
            <g>
              <g>
                <path
                  d="M44.14,56.25c-.46-.2-.88-.41-1.32-.63A30,30,0,0,1,29.4,15.37h0A30.14,30.14,0,0,1,37.8,5.08,30.75,30.75,0,0,1,42.8,2a31.79,31.79,0,1,0,1.49,59.09,31.23,31.23,0,0,0,5.43-3A28.61,28.61,0,0,1,44.14,56.25Z"
                  transform="translate(0 0)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div
          v-else
          class="text-white bg-black rounded-full text-center w-6 h-6 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 inline mx-auto"
            viewBox="0 0 65 65"
          >
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M32.5,51.16A18.76,18.76,0,1,0,13.74,32.4h0A18.76,18.76,0,0,0,32.5,51.16Zm0-3.41A15.35,15.35,0,1,0,17.15,32.4h0A15.35,15.35,0,0,0,32.5,47.75ZM32.5,0a1.69,1.69,0,0,0-1.71,1.67V8.54a1.73,1.73,0,0,0,1.71,1.69,1.69,1.69,0,0,0,1.71-1.67V1.69A1.73,1.73,0,0,0,32.5,0Zm23,9.52a1.69,1.69,0,0,0-2.38,0l0,0-4.85,4.84a1.72,1.72,0,0,0,0,2.4,1.69,1.69,0,0,0,2.38,0l0,0,4.84-4.85a1.7,1.7,0,0,0,0-2.4Zm9.5,23a1.69,1.69,0,0,0-1.67-1.71H56.46a1.73,1.73,0,0,0-1.69,1.71,1.69,1.69,0,0,0,1.67,1.71h6.87A1.73,1.73,0,0,0,65,32.5Zm-9.52,23a1.69,1.69,0,0,0,0-2.38l0,0-4.84-4.85a1.72,1.72,0,0,0-2.4,0,1.69,1.69,0,0,0,0,2.38l0,0,4.85,4.84a1.7,1.7,0,0,0,2.4,0ZM32.5,65a1.69,1.69,0,0,0,1.71-1.67V56.46a1.73,1.73,0,0,0-1.71-1.69,1.69,1.69,0,0,0-1.71,1.67v6.87A1.73,1.73,0,0,0,32.5,65Zm-23-9.52a1.69,1.69,0,0,0,2.38,0l0,0,4.85-4.84a1.72,1.72,0,0,0,0-2.4,1.69,1.69,0,0,0-2.38,0l0,0L9.51,53.08a1.7,1.7,0,0,0,0,2.4ZM0,32.5a1.69,1.69,0,0,0,1.67,1.71H8.54a1.73,1.73,0,0,0,1.69-1.71,1.69,1.69,0,0,0-1.67-1.71H1.69A1.73,1.73,0,0,0,0,32.5Zm9.52-23a1.69,1.69,0,0,0,0,2.38l0,0,4.84,4.85a1.72,1.72,0,0,0,2.4,0,1.69,1.69,0,0,0,0-2.38l0,0L11.92,9.51a1.7,1.7,0,0,0-2.4,0Z"
                      transform="translate(0 0)"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style></style>
