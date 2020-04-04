<template>
    <div class="main-content" style="width: 800px;margin: 80px auto;">
        <div class="page-content">
            <!-- Start Content-->
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <router-link class="nav-link" to="/" tag="a">Home <span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/404" tag="a">404 <span class="sr-only">(current)</span></router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <slot/>
            </div>
        </div>
    </div>
</template>
