@extends('layouts.app')

@section('content')
    <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{ env('APP_TITLE', 'Sample application') }}
                </h1>
                <h2 class="subtitle">
                    On this website you can list, create and search for exotic animals and species
                </h2>
            </div>
        </div>
    </section>
@endsection
