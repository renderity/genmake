// const platforms =
// {
// 	'linux':
// 	{
// 		MAKE_TOOL: 'make',

// 		MAKE_TOOL_INPUT_PREF: '-f',
// 	},

// 	'win32':
// 	{
// 		MAKE_TOOL: 'nmake',

// 		MAKE_TOOL_INPUT_PREF: '/F',
// 	},
// };

// const ROOT = '/home/denis';
const ROOT = '/Users/Denis';

module.exports =
{
	ROOT,



	// 'clang-wasm32':
	// {
	// 	/**
	// 	 * sudo apt install make
	// 	 *
	// 	 * Using regular clang:
	// 	 * export CLANG_VERSION=12
	// 	 * export LLD_VERSION=12
	// 	 * sudo apt install clang-${CLANG_VERSION} // clang, clang++
	// 	 * sudo apt install lld-${LLD_VERSION} // wasm-ld
	// 	 * sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100
	// 	 * sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100
	// 	 * sudo update-alternatives --install /usr/bin/wasm-ld wasm-ld /usr/bin/wasm-ld-${LLD_VERSION} 100
	// 	 *
	// 	 * Using wasi-sdk shipped clang:
	// 	 * export WASI_VERSION=12
	// 	 * export WASI_VERSION_FULL=${WASI_VERSION}.0
	// 	 * wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_VERSION}/wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz
	// 	 * tar xvf wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz
	// 	 */

	// 	UNIFORM_ARG:
	// 	[
	// 		'ARCH=wasm32',

	// 		'NO_LINK=-c',

	// 		'VERBOSE:=-Wall -Wextra -Wabi -Wpedantic -v',

	// 		'NO_STD=--no-standard-libraries',

	// 		'OPT_SLOW=-O1',

	// 		'OPT_MEDIUM=-O2',

	// 		'OPT_FAST=-O3',

	// 		'OPT_SIZE=-Os',

	// 		'OPT_FASTX=-Ofast -funroll-loops',

	// 		'STD_20=-std=c++20',

	// 		'SSE=-msimd128',
	// 	],

	// 	INC: '-I ',

	// 	PREF_OUT_OBJ: '-o ',

	// 	PREF_OUT_BIN: '-o ',

	// 	// a: 'o',
	// 	a: 'a',

	// 	o: 'o',

	// 	s: 'dcmp',

	// 	bin: 'wasm',

	// 	// Clang consumes WAST WebAssembly format with ".s" extension.
	// 	ASSEMBLER: '~/lib/wasi-sdk-14.0/bin/clang',

	// 	ASSEMBLER_ARG: '--target=wasm32-unknown-wasi-unknown --sysroot=~/lib/wasi-sdk-14.0/share/wasi-sysroot',

	// 	// wasi-sdk clang is set for wasm compilation, but regular clang can also be used with proper flags.
	// 	// C_COMPILER: 'clang',
	// 	C_COMPILER: '~/lib/wasi-sdk-14.0/bin/clang',

	// 	C_COMPILER_ARG: '--target=wasm32-unknown-wasi-unknown -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=~/lib/wasi-sdk-14.0/share/wasi-sysroot',
	// 	// C_COMPILER_ARG: '--target=wasm32-unknown-unknown-wasm32 -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=~/lib/wasi-sdk-14.0/share/wasi-sysroot',

	// 	// CPP_COMPILER: 'clang++',
	// 	CPP_COMPILER: '~/lib/wasi-sdk-14.0/bin/clang++',

	// 	// CPP_COMPILER_ARG: '--target=wasm32-unknown-wasi-unknown -I /usr/include/c++/10 -I /usr/include -I /usr/include/x86_64-linux-gnu -I /usr/include/x86_64-linux-gnu/c++/10',
	// 	CPP_COMPILER_ARG: '--target=wasm32-unknown-wasi-unknown -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=~/lib/wasi-sdk-14.0/share/wasi-sysroot',
	// 	// CPP_COMPILER_ARG: '--target=wasm32-unknown-unknown-wasm32 -ferror-limit=0 -fno-exceptions -mthread-model single -I /usr/include/c++/10 -I /usr/include -I /usr/include/x86_64-linux-gnu -I /usr/include/x86_64-linux-gnu/c++/10',

	// 	// BUILDER: 'wasm-ld',
	// 	BUILDER: '~/lib/wasi-sdk-14.0/bin/wasm-ld',
	// 	// BUILDER: 'clang++',

	// 	BUILDER_ARG: '-r -mwasm32 -error-limit=0 --export-all --no-entry --allow-undefined --no-check-features',
	// 	// BUILDER_ARG: '-Wl,-r -Wl,-mwasm32 -Wl,-ferror-limit=0 -Wl,--export-all -Wl,--no-entry -Wl,--allow-undefined --target=wasm32-unknown-wasi-unknown -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=~/lib/wasi-sdk-14.0/share/wasi-sysroot',

	// 	LINKER: 'wasm-ld',
	// 	// LINKER: '~/lib/wasi-sdk-14.0/bin/wasm-ld',

	// 	// use 4gb of memory
	// 	LINKER_ARG: '-mwasm32 -error-limit=0 --export-all --no-entry --allow-undefined --no-check-features --import-memory --shared-memory -L ~/lib/wasi-sdk-14.0/share/wasi-sysroot/lib/wasm32-wasi -lc -lc++ -lc++abi',
	// 	// LINKER_ARG: '-mwasm32 -ferror-limit=0 --export-all --no-entry -L /lib/llvm-12/lib -lc++',
	// },

	'clang-wasm32':
	{
		/**
		 * sudo apt install make
		 *
		 * Using regular clang:
		 * export CLANG_VERSION=12
		 * export LLD_VERSION=12
		 * sudo apt install clang-${CLANG_VERSION} // clang, clang++
		 * sudo apt install lld-${LLD_VERSION} // wasm-ld
		 * sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-${CLANG_VERSION} 100
		 * sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-${CLANG_VERSION} 100
		 * sudo update-alternatives --install /usr/bin/wasm-ld wasm-ld /usr/bin/wasm-ld-${LLD_VERSION} 100
		 *
		 * Using wasi-sdk shipped clang:
		 * export WASI_VERSION=12
		 * export WASI_VERSION_FULL=${WASI_VERSION}.0
		 * wget https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-${WASI_VERSION}/wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz
		 * tar xvf wasi-sdk-${WASI_VERSION_FULL}-linux.tar.gz
		 */

		// ROOT,

		UNIFORM_ARG:
		[
			'ARCH=wasm32',

			'NO_LINK=-c',

			'VERBOSE:=-Wall -Wextra -Wabi -Wpedantic -v',

			'NO_STD=--no-standard-libraries',

			'OPT_SLOW=-O1',

			'OPT_MEDIUM=-O2',

			'OPT_FAST=-O3',

			'OPT_SIZE=-Os',

			'OPT_FASTX=-Ofast -funroll-loops',

			'STD_20=-std=c++20',

			'SSE=-msimd128',
		],

		INC: '-I ',

		PREF_OUT_OBJ: '-o ',

		PREF_OUT_BIN: '-o ',

		// a: 'o',
		a: 'a',

		o: 'o',

		s: 'dcmp',

		bin: 'wasm',

		// Clang consumes WAST WebAssembly format with ".s" extension.
		ASSEMBLER: `${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/bin/clang`,

		ASSEMBLER_ARG: `--target=wasm32-unknown-wasi-unknown --sysroot=${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/share/wasi-sysroot`,

		// wasi-sdk clang is set for wasm compilation, but regular clang can also be used with proper flags.
		C_COMPILER: `${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/bin/clang`,

		C_COMPILER_ARG: `--target=wasm32-unknown-wasi-unknown -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/share/wasi-sysroot`,

		CPP_COMPILER: `${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/bin/clang++`,

		CPP_COMPILER_ARG: `--target=wasm32-unknown-wasi-unknown -ferror-limit=0 -fno-exceptions -mthread-model single --sysroot=${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/share/wasi-sysroot`,

		BUILDER: `${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/bin/wasm-ld`,

		BUILDER_ARG: '-r -mwasm32 -error-limit=0 --export-all --no-entry --allow-undefined --no-check-features',

		LINKER: `${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/bin/wasm-ld`,

		LINKER_ARG: `-mwasm32 -error-limit=0 --export-all --no-entry --allow-undefined --no-check-features --import-memory --shared-memory -L ${ ROOT }/reps/WebAssembly/wasi-sdk/build/wasi-sdk-15.1g37ae6af88201/share/wasi-sysroot/lib/wasm32-wasi -lc -lc++ -lc++abi`,
	},

	'gcc-x64':
	{
		/**
		 * sudo apt install make
		 * sudo apt install gcc-10
		 * sudo apt install g++-10
		 * sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 100
		 * sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-10 100
		 * sudo apt install ld
		 */

		// ROOT,

		UNIFORM_ARG:
		[
			'ARCH=x64',

			'NO_LINK=-c',

			'VERBOSE:=-Wall -Wextra -Wabi -Wpedantic -v',

			'NO_STD=--no-standard-libraries',

			'OPT_SLOW=-O1',

			'OPT_MEDIUM=-O2',

			'OPT_FAST=-O3',

			'OPT_SIZE=-Os',

			// TODO: add more performance args
			'OPT_FASTX=-Ofast -funroll-loops',

			'STD_20=-std=c++20',

			'SSE=-msse3',
		],

		INC: '-I ',

		PREF_OUT_OBJ: '-o ',

		PREF_OUT_BIN: '-o ',

		a: 'a',

		so: 'so',

		o: 'o',

		s: 's',

		bin: 'bin',

		C_COMPILER: 'gcc',

		C_COMPILER_ARG: '-m64',

		CPP_COMPILER: 'g++',

		CPP_COMPILER_ARG: '-m64',

		BUILDER: 'ld',

		BUILDER_ARG: '-r -flto',

		BUILDER_ARG_SHARED: '-shared -fPIC -flto',

		LINKER: 'g++',

		LINKER_ARG: '-flto --verbose',
	},
};
