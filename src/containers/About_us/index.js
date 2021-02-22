import Footer from '../../components/Footer';
import Header from '../../components/Header';

const about_us=()=>{
    return(
        <>
        <Header/>
       
        <div id="page-header" class="section-container page-header-container bg-black hide">
            
            <div class="page-header-cover">
                <img src="assets/img/about-us-cover.jpg" alt="" />
            </div>
            
            <div class="container">
                <h1 class="page-header"><b>About</b> Us</h1>
            </div>
            
        </div>
      
        <div id="about-us-cover" class="has-bg section-container">
            
            <div class="cover-bg">
                <img src="assets/img/about-us-cover.jpg" alt="" />
            </div>
            
            <div class="container">
                
                <ul class="breadcrumb m-b-10 f-s-12">
                    <li><a href="#">Home</a></li>
                    <li class="active">About Us</li>
                </ul>
                
                <div class="about-us text-center">
                    <h1>About SeanTheme</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis tortor justo, elementum volutpat ante porta eu.
                    </p>
                </div>
                
            </div>
            
        </div>
        
        <div id="about-us-content" class="section-container bg-white">
            
            <div class="container">
                
                <div class="about-us-content">
                    <h2 class="title text-center">What we do?</h2>
                    <p class="desc text-center">
                        Vestibulum ut enim nec justo imperdiet posuere nec quis odio.<br />
                        Nullam non tellus sed urna elementum vitae a erat. 
                    </p>
                    
                   
                    <div class="row">
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-muted"><i class="fa fa-truck"></i></div>
                                <div class="info">
                                    <h4 class="title">Curabitur</h4>
                                    <p class="desc">Duis in lorem placerat, iaculis nisi vitae, ultrices tortor. Vestibulum molestie ipsum nulla. Maecenas nec hendrerit eros, sit amet maximus leo.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-primary"><i class="fa fa-universal-access"></i></div>
                                <div class="info">
                                    <h4 class="title">Phasellus</h4>
                                    <p class="desc">Aenean et elementum dui. Aenean massa enim, suscipit ut molestie quis, pretium sed orci. Ut faucibus egestas mattis.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-info"><i class="fa fa-assistive-listening-systems"></i></div>
                                <div class="info">
                                    <h4 class="title">Pellentesque</h4>
                                    <p class="desc">Quisque gravida metus in sollicitudin feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <hr />
                    
                    <div class="row">
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-danger"><i class="fa fa-cc-discover"></i></div>
                                <div class="info">
                                    <h4 class="title">Vestibulum</h4>
                                    <p class="desc">Etiam nulla turpis, gravida et orci ac, viverra commodo ipsum. Donec nec mauris faucibus, congue nisi sit amet, lobortis arcu.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-inverse"><i class="fa fa-connectdevelop"></i></div>
                                <div class="info">
                                    <h4 class="title">Curabitur</h4>
                                    <p class="desc">Ut vel laoreet tortor. Donec venenatis ex velit, eget bibendum purus accumsan cursus. Curabitur pulvinar iaculis diam.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="service">
                                <div class="icon text-success"><i class="fa fa-braille"></i></div>
                                <div class="info">
                                    <h4 class="title">Phasellus</h4>
                                    <p class="desc">Integer consectetur, massa id mattis tincidunt, sapien erat malesuada turpis, nec vehicula lacus felis nec libero. Fusce non lorem nisl.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                 
                </div>
                
            </div>
           
        </div>
        
        <Footer/>
        </>
    )
}
export default about_us;
