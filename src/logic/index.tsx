/**
 * Class qui définie la logique pour calculer si l'avion peut décoller ou non.
 */
export default class Logic {
  private LIMITWINDFORCE: number = 10;
  private PERPENDICULAR: number = 90;
  private MAX: number = 360;

  private capPiste: number;
  private capVent: number;
  private forceVent: number;

  private windCondition: string;
  private goodToGo: boolean | null;

  constructor(_capPiste: number, _capVent: number, _forceVent: number) {
    this.capPiste = _capPiste;
    this.capVent = _capVent;
    this.forceVent = _forceVent;
    this.windCondition = "";
    this.goodToGo = null;

    if (this.capVent && this.capVent > 180) {
      this.capVent = this.capVent - this.MAX;
    }

    if (this.capPiste && this.capPiste > 180) {
      this.capPiste = this.capPiste - this.MAX;
    }
  }

  public computeResult(): { windCondition: string; goodToGo: boolean | null } {
    if (this.isHeadWind()) {
      this.setVarsWhenIsHeadWind();
    } else if (this.isTailWind()) {
      if (this.isWindForceLessThanTen()) {
        this.setVarsTailAndForceLess();
      } else {
        this.setVarsTailAndForceGreater();
      }
    } else if (this.isCrossWind()) {
      this.setVarsWhenIsCrossWind();
    }

    return { windCondition: this.windCondition, goodToGo: this.goodToGo };
  }

  public isHeadWind(): boolean {
    return this.capPiste === this.capVent;
  }

  public isCrossWind(): boolean {
    return Math.abs(this.capPiste - this.capVent) <= this.PERPENDICULAR;
  }

  public isTailWind(): boolean {
    return Math.abs(this.capPiste - this.capVent) > this.PERPENDICULAR;
  }

  public isWindForceLessThanTen(): boolean {
    return this.forceVent <= this.LIMITWINDFORCE;
  }

  public setVarsWhenIsHeadWind(): void {
    this.windCondition = "Head Wind - Vent de face";
    this.goodToGo = true;
  }

  public setVarsWhenIsCrossWind(): void {
    this.windCondition = "Cross Wind - Vent de travers";
    this.goodToGo = true;
  }

  public setVarsTailAndForceGreater(): void {
    this.windCondition = "Tail Wind - Vent arrière";
    this.goodToGo = false;
  }

  public setVarsTailAndForceLess(): void {
    this.windCondition = "Tail Wind - Vent arrière";
    this.goodToGo = true;
  }
}
