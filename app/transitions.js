export default function() {

	var durationTime = 200;

    this.transition(
        this.toRoute('index'),
        this.use('toRight', {
            duration: durationTime
        })
    );
    this.transition(
        this.toRoute('dashboard'),
        this.use('toRight', {
            duration: durationTime
        })
    );
		this.transition(
				this.toRoute('info'),
				this.use('toRight', {
						duration: durationTime
				})
		);
		this.transition(
				this.toRoute('connect'),
				this.use('toRight', {
						duration: durationTime
				})
		);
		this.transition(
				this.toRoute('detail'),
				this.use('toLeft', {
						duration: durationTime
				})
		);

}
