<template>
	<div class="container mx-auto flex py-10 mt-10 sm:mt-20">
		<div class="w-1/2">
			<div class="leading-loose">
				<form
					class="max-w-xl m-4 p-10 bg-white rounded shadow-xl text-left"
				>
					<p class="text-gray-600 text-2xl font-semibold mb-8">
						Customer information
					</p>
					<div class="">
						<label class="block text-sm text-gray-00" for="cus_name"
							>Name</label
						>
						<input
							class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							id="cus_name"
							name="cus_name"
							type="text"
							required=""
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div class="mt-2">
						<label
							class="block text-sm text-gray-600"
							for="cus_email"
							>Email</label
						>
						<input
							class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
							id="cus_email"
							name="cus_email"
							type="text"
							required=""
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div class="mt-2">
						<label
							class=" block text-sm text-gray-600"
							for="cus_email"
							>Address</label
						>
						<input
							class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
							id="cus_email"
							name="cus_email"
							type="text"
							required=""
							placeholder="Street"
							aria-label="Email"
						/>
					</div>
					<div class="mt-2">
						<label
							class="hidden text-sm block text-gray-600"
							for="cus_email"
							>City</label
						>
						<input
							class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
							id="cus_email"
							name="cus_email"
							type="text"
							required=""
							placeholder="City"
							aria-label="Email"
						/>
					</div>
					<div class="inline-block mt-2 w-1/2 pr-1">
						<label
							class="hidden block text-sm text-gray-600"
							for="cus_email"
							>Country</label
						>
						<input
							class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
							id="cus_email"
							name="cus_email"
							type="text"
							required=""
							placeholder="Country"
							aria-label="Email"
						/>
					</div>
					<div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
						<label
							class="hidden block text-sm text-gray-600"
							for="cus_email"
							>Zip</label
						>
						<input
							class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
							id="cus_email"
							name="cus_email"
							type="text"
							required=""
							placeholder="Zip"
							aria-label="Email"
						/>
					</div>
					<p class="mt-4 text-gray-800 font-medium">
						Payment information
					</p>
					<div class="">
						<label
							class="block text-sm text-gray-600"
							for="cus_name"
							>Card</label
						>
						<input
							class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
							id="cus_name"
							name="cus_name"
							type="text"
							required=""
							placeholder="Card Number MM/YY CVC"
							aria-label="Name"
						/>
					</div>
					<div class="mt-4">
						<button
							class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
							type="submit"
						>
							$3.00
						</button>
					</div>
				</form>
			</div>
		</div>
		<div class="w-1/2">
			<div class="col-lg-4 col-md-4 offset-md-1">
				<h2 class="h4 pb-3">Contact details</h2>
				<h3 class="h6 pb-2">North America - New York, NY</h3>
				<ul class="list-unstyled fs-sm pb-3">
					<li class="d-flex align-items-top mb-3">
						<i
							class="ai-map-pin fs-xl text-muted mt-1 me-2 pe-1"
						></i>
						<div>
							396 Lillian Blvd, Holbrook,<br />NY 11741, USA<br /><a
								class="fancy-link"
								href="#map"
								data-scroll=""
								>See on the map</a
							>
						</div>
					</li>
					<li class="d-flex align-items-center mb-3">
						<i class="ai-mail fs-xl text-muted me-2 pe-1"></i>
						<div>new.york@example.com</div>
					</li>
					<li class="d-flex align-items-center mb-3">
						<i class="ai-phone fs-xl text-muted me-2 pe-1"></i>
						<div>+ 1 526 220 0459</div>
					</li>
				</ul>
				<h3 class="h6 pb-2">Europe - Berlin, Germany</h3>
				<ul class="list-unstyled fs-sm">
					<li class="d-flex align-items-top mb-3">
						<i
							class="ai-map-pin fs-xl text-muted mt-1 me-2 pe-1"
						></i>
						<div>
							Mohrenstrasse 37 10117,<br />Berlin, Germany<br />
						</div>
					</li>
					<li class="d-flex align-items-center mb-3">
						<i class="ai-mail fs-xl text-muted me-2 pe-1"></i>
						<div>berlin@example.com</div>
					</li>
					<li class="d-flex align-items-center mb-3">
						<i class="ai-phone fs-xl text-muted me-2 pe-1"></i>
						<div>030 778 345 26</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	setup() {},
};
</script>
