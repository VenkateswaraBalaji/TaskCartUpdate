/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
doctype html
html(lang='en')
    head
        meta(charset='utf-8')
        meta(name='viewport', content='width=device-width, initial-scale=1, shrink-to-fit=no')
        meta(name='description', content='')
        meta(name='author', content='')
        title Shop Homepage - Start Bootstrap Template
        link(rel='icon', type='image/x-icon', href='assets/favicon.ico')
        link(href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css', rel='stylesheet')
        link(href='css/styles.css', rel='stylesheet')
    body
        nav.navbar.navbar-expand-lg.navbar-light.bg-light
            .container.px-4.px-lg-5
                a.navbar-brand(href='#!') Start Bootstrap
                button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
                    span.navbar-toggler-icon
                #navbarSupportedContent.collapse.navbar-collapse
                    ul.navbar-nav.me-auto.mb-2.mb-lg-0.ms-lg-4
                        li.nav-item
                            a.nav-link.active(aria-current='page' href='#!') Home
                        li.nav-item
                            a.nav-link(href='#!') About
                        li.nav-item.dropdown
                            a#navbarDropdown.nav-link.dropdown-toggle(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
                                | Shop
                            ul.dropdown-menu(aria-labelledby='navbarDropdown')
                                li
                                    a.dropdown-item(href='#!') All Products
                                li
                                    hr.dropdown-divider
                                li
                                    a.dropdown-item(href='#!') Popular Items
                                li
                                    a.dropdown-item(href='#!') New Arrivals
                    form.d-flex
                        button.btn.btn-outline-dark(type='submit')
                            i.bi-cart-fill.me-1
                            | Cart
                            span.badge.bg-dark.text-white.ms-1.rounded-pill 0

        header.bg-dark.py-5
            .container.px-4.px-lg-5.my-5
                .text-center.text-white
                    h1.display-4.fw-bolder Shop in style
                    p.lead.fw-normal.text-white-50.mb-0 With this shop homepage template

        section.py-5
            .container.px-4.px-lg-5.mt-5
                .row.gx-4.gx-lg-5.row-cols-2.row-cols-md-3.row-cols-xl-4.justify-content-center
                    .col.mb-5
                        .card.h-100
                            img.card-img-top(src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg', alt='...')
                            .card-body.p-4
                                .text-center
                                    h5.fw-bolder Fancy Product
                                    p.text-muted.mb-2 Rating: 
                                    .rating
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                    p.fw-bold.text-primary $40.00 - $80.00
                            .card-footer.p-4.pt-0.border-top-0.bg-transparent
                                .text-center
                                    button.btn.btn-outline-dark.mt-auto.add-to-cart(data-product='1', disabled=false) Add to cart
                    .col.mb-5
                        .card.h-100
                            .badge.bg-dark.text-white.position-absolute(style='top: 0.5rem; right: 0.5rem;') Sale
                            img.card-img-top(src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg', alt='...')
                            .card-body.p-4
                                .text-center
                                    h5.fw-bolder Special Item
                                    p.text-muted.mb-2 Rating: 
                                    .rating
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                        i.bi-star-fill
                                    span.text-muted.text-decoration-line-through $20.00
                                    p.fw-bold.text-primary $18.00
                            .card-footer.p-4.pt-0.border-top-0.bg-transparent
                                .text-center
                                    button.btn.btn-outline-dark.mt-auto.add-to-cart(data-product='2', disabled=false) Add to cart
                    .col.mb-5
                        .card.h-100
                            .badge.bg-dark.text-white.position-absolute(style='top: 0.5rem; right: 0.5rem;') Sale
                            img.card-img-top(src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg', alt='...')
                            .card-body.p-4
                                .text-center
                                    h5.fw-bolder Sale Item
                                    span.text-muted.text-decoration-line-through $50.00
                                    p.fw-bold.text-primary $25.00
                            .card-footer.p-4.pt-0.border-top-0.bg-transparent
                                .text-center
                                    button.btn.btn-outline-dark.mt-auto.add-to-cart(data-product='3', disabled=false) Add to cart

        section#cart-section.py-5
            .container.px-4.px-lg-5.mt-5
                h2.text-center.mb-5 Your Cart
                .row
                    // Cart items will be dynamically added here

        footer.py-5.bg-dark
            .container
                p.m-0.text-center.text-white Copyright &copy; Your Website 2023

        script(src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js')
        script(src='js/scripts.js')
