import './Preloader.css';

function Preloader() {

    return (
        <div class="loader">
            <div class="panWrapper">
                <div class="pan">
                    <div class="food"></div>
                    <div class="panBase"></div>
                    <div class="panHandle"></div>
                </div>
                <div class="panShadow"></div>
            </div>
        </div>

    )
}

export default Preloader;