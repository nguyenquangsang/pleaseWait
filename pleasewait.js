/**
 * Created by SANGNQ on 4/11/16.
 */
(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            return (root.pleaseWait = factory($));
        });
    }
    else {
        root.pleaseWait = root.pleaseWait || factory(root.jQuery);
    }
})(this, function ($) {
    'use strict';

    function makeDialog(message) {
        if (undefined == message || message == null) {
            message = 'Please Wait...';
        }

        return '<!-- Modal Start here-->'
        + '<div class="modal fade bs-example-modal-sm" id="myPleaseWait" tabindex="-1"role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">'
        + '<div class="modal-dialog modal-sm">'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + '<h4 class="modal-title">'
        + '<span class="glyphicon glyphicon-time">'
        + '</span> ' + message
        + '</h4>'
        + '</div>'
        + '<div class="modal-body">'
        + '<div class="progress">'
        + '<div class="progress-bar progress-bar-info progress-bar-striped active"'
        + 'style="width: 100%">'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<!-- Modal ends Here -->';
    }

    var style = '<style>body.modal-open {overflow: hidden;position: fixed;}</style>';

    return {
        show: function (message) {
            // check exist class, if dont have, add into;
            if (!$('body').hasClass('modal-open')) {
                $('body').append(style);
            }

            // check exist element;
            if (!$('#myPleaseWait').length) {
                // make dialog;
                var dialog = makeDialog(message);
                // append;
                $('body').append(dialog);
            }

            // show please wait;
            $('#myPleaseWait').modal('show').on('shown.bs.modal', function () {
                $('body').addClass('modal-open');
            });
        },
        hide: function () {
            $('#myPleaseWait').modal('hide').on('hidden.bs.modal', function () {
                $('body').removeClass('modal-open');
            })
        }
    };
});