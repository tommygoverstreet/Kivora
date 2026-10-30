// Generated from data/*.json — do not edit by hand.
// Run: node scripts/sync-data.mjs
const KV_DATA = {
  "components": [
    {
      "id": "navbar",
      "label": "Navbar",
      "icon": "☰",
      "props": {
        "brand": "Kivora",
        "links": [
          {
            "label": "Features",
            "href": "#features"
          },
          {
            "label": "Pricing",
            "href": "#pricing"
          }
        ],
        "ctaLabel": "Get started",
        "ctaHref": "#cta"
      },
      "fields": [
        [
          "brand",
          "Brand"
        ],
        [
          "links",
          "Links",
          "json"
        ],
        [
          "ctaLabel",
          "Button label"
        ],
        [
          "ctaHref",
          "Button link"
        ]
      ]
    },
    {
      "id": "hero",
      "label": "Hero",
      "icon": "★",
      "props": {
        "eyebrow": "Cloud platform",
        "title": "Build something remarkable",
        "text": "One platform to deploy, monitor and scale.",
        "btn1": "Start free",
        "btn1Href": "#cta",
        "btn2": "Learn more",
        "btn2Href": "#features"
      },
      "fields": [
        [
          "eyebrow",
          "Eyebrow"
        ],
        [
          "title",
          "Title"
        ],
        [
          "text",
          "Text",
          "textarea"
        ],
        [
          "btn1",
          "Button 1"
        ],
        [
          "btn1Href",
          "Button 1 link"
        ],
        [
          "btn2",
          "Button 2"
        ],
        [
          "btn2Href",
          "Button 2 link"
        ]
      ]
    },
    {
      "id": "features",
      "label": "Feature cards",
      "icon": "▦",
      "props": {
        "id": "features",
        "title": "Features",
        "items": [
          {
            "title": "Deploy",
            "text": "Ship in minutes.",
            "color": "yellow"
          },
          {
            "title": "Monitor",
            "text": "See everything.",
            "color": "orange"
          },
          {
            "title": "Scale",
            "text": "Grow without limits.",
            "color": "mint"
          }
        ]
      },
      "fields": [
        [
          "id",
          "Anchor id"
        ],
        [
          "title",
          "Title"
        ],
        [
          "items",
          "Cards",
          "json"
        ]
      ]
    },
    {
      "id": "stats",
      "label": "Stat counters",
      "icon": "#",
      "props": {
        "title": "",
        "items": [
          {
            "value": 87,
            "suffix": "%",
            "label": "Satisfaction",
            "color": "yellow"
          },
          {
            "value": 12,
            "suffix": "×",
            "label": "Faster",
            "color": "orange"
          },
          {
            "value": 342,
            "prefix": "$",
            "suffix": "K",
            "label": "Revenue",
            "color": "blue"
          },
          {
            "value": 99,
            "suffix": "%",
            "label": "Uptime",
            "color": "mint"
          }
        ]
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "items",
          "Stats",
          "json"
        ]
      ]
    },
    {
      "id": "chart",
      "label": "Chart",
      "icon": "▮",
      "props": {
        "title": "Revenue by quarter",
        "type": "bar",
        "values": "12,18,26,34",
        "labels": "Q1,Q2,Q3,Q4"
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "type",
          "Type",
          "select",
          [
            "bar",
            "line",
            "donut"
          ]
        ],
        [
          "values",
          "Values (comma)"
        ],
        [
          "labels",
          "Labels (comma)"
        ]
      ]
    },
    {
      "id": "pricing",
      "label": "Pricing",
      "icon": "$",
      "props": {
        "id": "pricing",
        "title": "Pricing",
        "dark": true,
        "plans": [
          {
            "name": "Starter",
            "price": "$0",
            "note": "Small projects"
          },
          {
            "name": "Pro",
            "price": "$29",
            "note": "Teams",
            "featured": true
          },
          {
            "name": "Scale",
            "price": "$99",
            "note": "Enterprise"
          }
        ]
      },
      "fields": [
        [
          "id",
          "Anchor id"
        ],
        [
          "title",
          "Title"
        ],
        [
          "dark",
          "Dark background",
          "bool"
        ],
        [
          "plans",
          "Plans",
          "json"
        ]
      ]
    },
    {
      "id": "timeline",
      "label": "Timeline",
      "icon": "⋯",
      "props": {
        "title": "Roadmap",
        "steps": [
          {
            "title": "Plan",
            "text": "Scope it.",
            "date": "Jan",
            "color": "yellow"
          },
          {
            "title": "Build",
            "text": "Make it.",
            "date": "Feb",
            "color": "orange"
          },
          {
            "title": "Launch",
            "text": "Ship it.",
            "date": "Mar",
            "color": "mint"
          }
        ]
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "steps",
          "Steps",
          "json"
        ]
      ]
    },
    {
      "id": "faq",
      "label": "FAQ accordion",
      "icon": "?",
      "props": {
        "title": "Questions",
        "items": [
          {
            "title": "Is it free?",
            "content": "Yes, the Starter plan is free."
          },
          {
            "title": "Can I cancel?",
            "content": "Anytime."
          }
        ]
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "items",
          "Items",
          "json"
        ]
      ]
    },
    {
      "id": "tabs",
      "label": "Tabs",
      "icon": "▭",
      "props": {
        "title": "Details",
        "tabs": [
          {
            "label": "Overview",
            "content": "Overview content."
          },
          {
            "label": "Specs",
            "content": "Spec content."
          }
        ]
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "tabs",
          "Tabs",
          "json"
        ]
      ]
    },
    {
      "id": "table",
      "label": "Table",
      "icon": "☷",
      "props": {
        "title": "Status",
        "head": [
          "Workstream",
          "Owner",
          "Status"
        ],
        "rows": [
          [
            "Discovery",
            "Team A",
            "Done"
          ],
          [
            "Build",
            "Team B",
            "Active"
          ]
        ]
      },
      "fields": [
        [
          "title",
          "Title"
        ],
        [
          "head",
          "Header",
          "json"
        ],
        [
          "rows",
          "Rows",
          "json"
        ]
      ]
    },
    {
      "id": "text",
      "label": "Text block",
      "icon": "¶",
      "props": {
        "id": "",
        "title": "Heading",
        "body": "Write your paragraph here.",
        "center": false,
        "dark": false
      },
      "fields": [
        [
          "id",
          "Anchor id"
        ],
        [
          "title",
          "Title"
        ],
        [
          "body",
          "Body",
          "textarea"
        ],
        [
          "center",
          "Center",
          "bool"
        ],
        [
          "dark",
          "Dark background",
          "bool"
        ]
      ]
    },
    {
      "id": "cta",
      "label": "Call to action",
      "icon": "➜",
      "props": {
        "id": "cta",
        "title": "Ready to start?",
        "text": "Create your account in minutes.",
        "label": "Get started",
        "href": "#",
        "dark": true
      },
      "fields": [
        [
          "id",
          "Anchor id"
        ],
        [
          "title",
          "Title"
        ],
        [
          "text",
          "Text"
        ],
        [
          "label",
          "Button label"
        ],
        [
          "href",
          "Button link"
        ],
        [
          "dark",
          "Dark background",
          "bool"
        ]
      ]
    },
    {
      "id": "carousel",
      "label": "Carousel",
      "icon": "◫",
      "props": {
        "auto": 4000,
        "slides": [
          "Slide one",
          "Slide two",
          "Slide three"
        ]
      },
      "fields": [
        [
          "auto",
          "Auto-play ms",
          "number"
        ],
        [
          "slides",
          "Slides",
          "json"
        ]
      ]
    },
    {
      "id": "alert",
      "label": "Alert",
      "icon": "!",
      "props": {
        "color": "cyan",
        "text": "Heads up: something worth knowing."
      },
      "fields": [
        [
          "color",
          "Color",
          "select",
          [
            "yellow",
            "orange",
            "red",
            "blue",
            "cyan",
            "mint"
          ]
        ],
        [
          "text",
          "Text"
        ]
      ]
    },
    {
      "id": "footer",
      "label": "Footer",
      "icon": "▁",
      "props": {
        "text": "© Kivora"
      },
      "fields": [
        [
          "text",
          "Text"
        ]
      ]
    }
  ],
  "presets": {
    "blank": {
      "name": "Blank page",
      "spec": []
    },
    "saas": {
      "name": "SaaS landing",
      "spec": [
        {
          "type": "navbar"
        },
        {
          "type": "hero"
        },
        {
          "type": "features"
        },
        {
          "type": "stats"
        },
        {
          "type": "chart"
        },
        {
          "type": "pricing"
        },
        {
          "type": "faq"
        },
        {
          "type": "cta"
        },
        {
          "type": "footer"
        }
      ]
    },
    "report": {
      "name": "Business report",
      "spec": [
        {
          "type": "hero",
          "props": {
            "eyebrow": "Quarterly report",
            "title": "Q4 Business Review",
            "text": "Highlights and next steps.",
            "btn1": "",
            "btn2": ""
          }
        },
        {
          "type": "stats"
        },
        {
          "type": "chart"
        },
        {
          "type": "table"
        },
        {
          "type": "timeline"
        },
        {
          "type": "footer"
        }
      ]
    },
    "pricing": {
      "name": "Pricing page",
      "spec": [
        {
          "type": "navbar"
        },
        {
          "type": "hero",
          "props": {
            "eyebrow": "Pricing",
            "title": "Simple, transparent plans",
            "text": "Pick a plan and upgrade anytime.",
            "btn1": "",
            "btn2": ""
          }
        },
        {
          "type": "pricing"
        },
        {
          "type": "faq"
        },
        {
          "type": "cta"
        },
        {
          "type": "footer"
        }
      ]
    }
  }
};
