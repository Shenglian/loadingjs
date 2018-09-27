(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.loading = factory();
  }
}(this, () => {
  function Loading({
    el,
    activeClassName
  }) {
    let instance = {
      el,
      activeClassName
    }
   
    instance.add = () => {
      instance.el.classList.remove(instance.activeClassName)
      instance.el.classList.add(instance.activeClassName)
    }
  
    instance.remove = () => {
      instance.el.classList.remove(instance.activeClassName)
    }
  
    instance.toggle = () => {
      instance.el.classList.toggle(instance.activeClassName)
    }
  
    return instance;
  }

  Loading.version = '1.0.1';
  return Loading;
}))
