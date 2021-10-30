const actionDiv = document.getElementById('action-container')

$.ajax('https://api.storyblok.com/v1/cdn/stories?starts_with=actiongames/&token=gIKZC3mmZ48f16nJl7WK5gtt', {
    success: function (data, status, xhr) {
        const gamesData = data.stories.map(item => {
            return {
                title: item.content.title,
                img_url: item.content.image_link.url,
                site_url: item.content.site_link.url
            }
        })
        console.log(gamesData)

        for (let i = 0; i < gamesData.length; i++) {

        }
    }
})