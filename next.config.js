module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.facebook.com/plugins/customer_chat/SDK/?app_id=445580737497709&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df4620e7a7db12c%26domain%3Dnhahang.vercel.app%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fnhahang.vercel.app%252Ff1ce1db6a65438c%26relation%3Dparent.parent&current_url=https%3A%2F%2Fnhahang.vercel.app%2F&event_name=chat_plugin_sdk_facade_create&is_loaded_by_facade=true&loading_time=0&locale=en_US&log_id=7f26a5fa-ab35-4794-844e-2438e6735fc5&page_id=100085506585411&request_time=1665641629935&sdk=joey&should_use_new_domain=false&suppress_http_code=1',
      },
    ]
  },
  images: {
    domains: ["res.cloudinary.com", 'i5.walmartimages.com', 'www.google.com']
  }
}
