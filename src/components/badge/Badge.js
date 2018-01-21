export default {
    template: `
<div class="bell-badge
{{#if type}} bell-badge-{{type}}{{/if}}
{{#if className}} {{className}}{{/if}}
">
    {{$children}}
    {{#if !hidden}}
        {{#if dot}}
            <span class="bell-badge-dot"></span>
        {{else}}
            <span class="bell-badge-count{{#if !$children}} bell-badge-count-alone{{/if}}">
                {{getText(count, maxCount)}}
            </span>
        {{/if}}
    {{/if}}
</div>
    `,
    propTypes: {
        count: {
            type: ['string', 'number']
        },
        maxCount: {
            type: ['string', 'number']
        },
        dot: {
            type: ['string', 'number', 'boolean']
        },
        className: {
            type: 'string'
        },
        hidden: {
            type: ['string', 'number', 'boolean']
        },
        type: {
            type: 'string'
        }
    },

    filters: {
        getText: function (count, maxCount) {
            var me = this;
            var maxCount = Yox.is.number(+maxCount) ? +maxCount : '';
            var count = Yox.is.number(+count) ? +count : '';

            return maxCount < count ? maxCount + '+' : count;
        }
    }
}