/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722522854", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1 min-h-screen">
                <nav class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 shadow-lg">
                    <div class="container mx-auto flex justify-between items-center">
                        <div class="text-white font-bold text-xl">Logo</div>
                        <div class="space-x-4">
                            <a href="#" class="text-white hover:text-pink-200 transition duration-300">Home</a>
                            <a href="#" class="text-white hover:text-pink-200 transition duration-300">About</a>
                            <a href="#" class="text-white hover:text-pink-200 transition duration-300">Contact</a>
                        </div>
                    </div>
                </nav>
                <div id="blank-container" class="max-w-screen-xl px-8 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white border-opacity-30">
                        <h2 class="text-5xl font-extrabold text-white mb-8 font-sans leading-tight">Welcome to Our Cosmic World</h2>
                        <p class="text-xl text-pink-100 mb-10 font-light leading-relaxed">Explore the vibrant universe of possibilities with us.</p>
                        <button class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 backdrop-filter backdrop-blur-sm bg-opacity-70 mr-4">
                            Start Your Journey
                        </button>
                        <button class="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 backdrop-filter backdrop-blur-sm bg-opacity-70">
                            Submit
                        </button>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
